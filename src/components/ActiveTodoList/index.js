import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

const ActiveTodoList = (props) => {
  const { todoItems, deleteTodo, completeTodo } = props;

  return (
    <Box
      width="400px"
      display="flex"
      p={1}
      flexDirection="column"
      alignItems="flex-start"
      border="1px solid lightGrey"
    >
      <Typography variant="h6">Active Items</Typography>

      <Box
       mt={2}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        width="100%"
        alignSelf="center"
      >
        {todoItems.length > 0 &&
          todoItems.map((item) => (
            <Box
              key={item.id}
              py={1}
              width="100%"
              display="flex"
              justifyContent="space-between"
              borderBottom="1px solid lightGrey"
              alignItems="center"
              alignSelf="center"
            >
              <Checkbox
                onChange={() => completeTodo(item)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Box mx={2} />
              <Box mx={2}> {item.todo}</Box>
              <Box mx={2} />
              <Button variant="contained" onClick={() => deleteTodo(item)}>
                Delete
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ActiveTodoList;
