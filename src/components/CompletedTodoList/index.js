import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ActiveTodoList = (props) => {
  const { completeTodoItems } = props;
  return (
    <Box
      width="400px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px solid lightGrey"
    >
      <Typography variant="h6">Closed Items</Typography>

      <Box
        m={1}
        p={1}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxWidth="300px"
        alignSelf="center"
      >
        {completeTodoItems.map((item) => (
          <Box mx={2}> {item.text}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default ActiveTodoList;
