import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { toast } from "react-toastify";
import { authenticateUser } from "../api/users";

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password)
      //authenticate user
      authenticateUser(username, password).then(async (res) => {
        if (!res) {
          toast.error("Enter valid username and password", {
            position: "top-right",
          });
          return;
        }
        localStorage.setItem("isLogged", true);
        localStorage.setItem("token", res.token);
        navigate("/home");
      });
    else
      toast.error("Enter valid username and password", {
        position: "top-right",
      });
  };

  //skip login if the user is already logged in.
  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") navigate("/home");
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <div
          className="Page"
          style={{ border: "solid", padding: "45px", marginTop: "50px" }}
        >
          <div
            style={{ position: "relative", left: "35px", fontStyle: "italic" }}
          >
            <h1>My Commerce</h1>
          </div>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      </Container>
    </ThemeProvider>
  );
}
