import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axios from "axios";
import Typography from "@mui/material/Typography";

import AddTodo from "../AddTodo";
import LoginForm from "../LoginForm";
import CompletedTodoList from "../CompletedTodoList";
import ActiveTodoList from "../ActiveTodoList";
import AllTodoList from "../AllTodoList";

const baseURL = "http://localhost:3010";

function App() {
  const [todoItems, setTodoItems] = React.useState([]);
  const [username, setUsername] = React.useState();
  const [completeTodoItems, setCompleteTodoItems] = React.useState([]);

  const fetchItems = () => {
    // Fetch Items from API with username
    const URL = baseURL + `/todos?username=${username}`;
    axios.get(URL).then((response) => {
      const activeItems = response.data.filter(
        (item) => item.status === "active"
      );
      const completeItems = response.data.filter(
        (item) => item.status === "complete"
      );
      setTodoItems(activeItems);
      setCompleteTodoItems(completeItems);
    });
  };

  const addTask = (todoItem) => {
    const item = { todo: todoItem, username, status: "active" };

    //Add Item from API
    const URL = baseURL + `/todos`;
    const postData = item;
    axios.post(URL, postData).then((response) => {
      console.log(response.data.todo + " new todo item to be added");
      fetchItems();
    });
  };
  const deleteTodo = (todoItem) => {
    //Delete Item from API
    const URL = baseURL + `/todos/${todoItem.id}`;
    axios.delete(URL).then((response) => {
      console.log("item deleted");
      fetchItems();
    });
  };
  const completeTodo = (todoItem) => {
    // Update Item from API
    const URL = baseURL + `/todos/${todoItem.id}`;
    const putData = { status: "complete" };
    axios.put(URL, putData).then((response) => {
      console.log(response.data.todo + "  item updated");
      fetchItems();
    });
  };
  const performLogin = (user) => {
    setUsername(user);
    console.log(user + " tried to login");
  };

  const performLogout = () => {
    setUsername();
    console.log(username + " tried to logout");
  };

  React.useEffect(() => {
    if (username) {
      fetchItems();
    }
  }, [username]);

  return (
    <Box
      m={1}
      p={1}
      border="1px solid lightGrey"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
      width="600px"
      height="800px"
      margin="16px auto"
      alignSelf="center"
    >
      {!username && (
        <LoginForm
          username={username}
          setUsername={setUsername}
          performLogin={performLogin}
        />
      )}
      {username && (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignSelf="center"
        >
          <Box m={2} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3">ToDo App</Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <h4>{username}</h4>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <AllTodoList
                completeTodoItems={completeTodoItems}
                todoItems={todoItems}
              />
              <Box mx={1} />
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={performLogout}
              >
                Logout
              </Button>
            </Box>
          </Box>
          <AddTodo addTask={addTask} />
          <Box my={2} />
          <ActiveTodoList
            todoItems={todoItems}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
          <Box my={2} />
          <CompletedTodoList completeTodoItems={completeTodoItems} />
        </Box>
      )}
    </Box>
  );
}

export default App;
