import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ActiveTodoList = (props) => {
  const { todoItems, deleteTodo, completeTodo } = props;

  return (
    <Box
    width="400px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    border="1px solid lightGrey"
  >
    <Typography variant="h6">Active Items</Typography>

    <Box
      m={1}
      p={1}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      maxWidth="300px"
      alignSelf="center"
    >
      {todoItems.length>0 && todoItems.map((item, index) => (
        <Box 
          key={index}
          m={1}
          p={1}
          display="flex"
          justifyContent="space-between"
          alignSelf="center"
        >
          <Button variant="contained" onClick={()=>completeTodo(item.text)}>
            Complete
          </Button>
          <Box mx={2} />
          <Box mx={2}> {item.text}</Box>
          <Box mx={2} />
          <Button variant="contained" onClick={()=>deleteTodo(item.text)}>
            Delete
          </Button>
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default ActiveTodoList;
