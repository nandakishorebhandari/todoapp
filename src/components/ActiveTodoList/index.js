import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
const ActiveTodoList = (props) => {
  const { todoItems, deleteTodo, completeTodo } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState();

  const handleDialogClose = () => {
    setSelectedItem();
    setOpen(false);
  };
  const handleDeleteItem = () => {
    deleteTodo(selectedItem);
    setSelectedItem();
    setOpen(false);
  };
  const handleDialogOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

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
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want the delete the tod item?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDialogClose}>No</Button>
          <Button onClick={handleDeleteItem} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
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
              <Button
                variant="contained"
                onClick={() => handleDialogOpen(item)}
              >
                Delete
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ActiveTodoList;
