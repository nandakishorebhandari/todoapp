import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddTodo from "../AddTodo";
import LoginForm from "../LoginForm";
import CompletedTodoList from "../CompletedTodoList";
import ActiveTodoList from "../ActiveTodoList";
function App() {
  const [todoItems, setTodoItems] = React.useState([]);
  const [username, setUsername] = React.useState();
  const [completeTodoItems, setCompleteTodoItems] = React.useState([]);

  React.useEffect(() => {
    //ToDo: Fetch Items from API with username
    const items = [
      { text: "dasd1", username: "nanda", createdAt: new Date().getTime() },
      { text: "dasd2", username: "nanda", createdAt: new Date().getTime() },
      { text: "dasd3", username: "nanda", createdAt: new Date().getTime() },
      { text: "dasd4", username: "nanda", createdAt: new Date().getTime() },
    ];

    if (username === "nanda") {
      setTodoItems(items);
    }
  }, [username]);
  const performLogin = (user) => {
    setUsername(user);
    console.log(user + " tried to login");
  };
  const performLogout = () => {
    setUsername();
    console.log(username + " tried to logout");
  };
  const addTask = (todoItem) => {
    const item = { text: todoItem, username, createdAt: new Date().getTime() };
    const newItems = todoItems.slice();
    newItems.push(item);
    setTodoItems(newItems);
    console.log(newItems, todoItem + " new todo item to be added");

    //ToDo: Add Item from API
  };
  const deleteTodo = (todoItem) => {
    const newItems = todoItems.slice().filter((todo) => todo.text !== todoItem);
    setTodoItems(newItems);
    console.log(newItems + " new todo item to be deleted");

    //ToDo: Delete Item from API
  };
  const completeTodo = (todoItem) => {
    const compltedItem = todoItems
      .slice()
      .filter((todo) => todo.text == todoItem)[0];
    const newItems = todoItems.slice().filter((todo) => todo.text !== todoItem);
    setTodoItems(newItems);
    const newCompletedTodoItems = completeTodoItems.slice();
    newCompletedTodoItems.push(compltedItem);
    setCompleteTodoItems(newCompletedTodoItems);
    console.log(compltedItem.text + " new todo item to be completed");

    //ToDo: Update Item from API
  };

  return (
    <Box
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
          m={1}
          p={1}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignSelf="center"
        >
          <Button variant="text" onClick={performLogout}>
            Logout
          </Button>
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
