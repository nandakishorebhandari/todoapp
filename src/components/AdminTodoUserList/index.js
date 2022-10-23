import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const baseURL = "http://localhost:3010";
const ActiveTodoList = (props) => {
  const [userTodoItems, setUserTodoItems] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    // Fetch Items from API with username
    const URL = baseURL + `/todos/admin`;
    axios.get(URL).then((response) => {
      setUserTodoItems(response.data);
    });
  }, []);
  
  return (
    <Box display="flex" mt={4} justifyContent="center">
      <Button
        size="small"
        variant="outlined"
        color="primary"
        onClick={() => setOpen(true)}
      >
        Login as admin
      </Button>
      <Dialog
        open={open}
        fullWidth
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"All Users Todo Items"}</DialogTitle>
        <Box
          mt={2}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          alignSelf="center"
        >
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell >Username</TableCell>
                  <TableCell >Status</TableCell>
                  <TableCell >Todo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userTodoItems.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell >{row.username}</TableCell>
                    <TableCell >{row.status}</TableCell>
                    <TableCell >{row.todo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ActiveTodoList;