import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

const ActiveTodoList = (props) => {
  const { completeTodoItems } = props;

  return (
    <Box
      width="400px"
      p={1}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      border="1px solid lightGrey"
    >
      <Typography variant="h6">Completed Items</Typography>

      <Box
       mt={2}
          display="flex"
        justifyContent="center"
        flexDirection="column"
        width="100%"
        alignSelf="center"
      >
        {completeTodoItems.length > 0 &&
          completeTodoItems.map((item) => (
            <Box
              key={item.id}
              width="100%"
              py={1}
              borderBottom="1px solid lightGrey"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Checkbox
              checked
                inputProps={{ "aria-label": "controlled" }}
              />
              <Box mx={2} />
              <Box mx={2}> {item.todo}</Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ActiveTodoList;
