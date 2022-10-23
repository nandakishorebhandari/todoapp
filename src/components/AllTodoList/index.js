import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
const ActiveTodoList = (props) => {
  const { completeTodoItems, todoItems } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <Box display="flex" justifyContent="center">
      <Button  size="small" variant="outlined" color="primary"  onClick={() => setOpen(true)}>
        View All Tasks
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"All Items"}</DialogTitle>
        <Box
          mt={2}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          alignSelf="center"
        >
          {[...completeTodoItems, ...todoItems].length > 0 &&
            [...completeTodoItems, ...todoItems].map((item) => (
              <Box
                key={item.id}
                width="100%"
                py={1}
                borderBottom="1px solid lightGrey"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Checkbox checked={item.status==="complete"} inputProps={{ "aria-label": "controlled" }} />
                <Box mx={2} />
                <Box mx={2}> {item.todo}</Box>
              </Box>
            ))}
        </Box>
      </Dialog>
    </Box>
  );
};

export default ActiveTodoList;
