import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AdminTodoUserList from "../AdminTodoUserList"

function App(props) {
  const { performLogin } = props;
  const [username, setUsername] = React.useState();

  return (
    <Box m={1} p={1} display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h3">ToDo App</Typography>

      <Box
        mt={8}
        p={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="300px"
        alignSelf="center"
      >
        <TextField
          id="outlined-bassic"
          label="Username"
          variant="outlined"
          value={username}
          size="small"
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
        />
        <Box mx={2} />
        <Button variant="contained" onClick={() => performLogin(username)}>
          Login
        </Button>
      </Box>
      <AdminTodoUserList/>
    </Box>
  );
}

export default App;
