import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
function App(props) {
  const { addTask } = props;
  const [todoItem, setTodoItem] = React.useState("");

  return (
    <Box
      width="400px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px solid lightGrey"
    >
      <Typography variant="h6">Add Item</Typography>

      <Box
        m={1}
        p={1}
        display="flex"
        justifyContent="space-between"
        alignSelf="center"
      >
        <TextField
          id="outlined-basic"
          label="ToDo Item"
          variant="outlined"
          value={todoItem}
          fullWidth
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <Box mx={2} />
        <Button variant="contained" onClick={() => addTask(todoItem)}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default App;
