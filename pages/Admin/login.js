import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const User = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/Admin");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // is used to prevent the window to reload and stop to lose the input data

    const data = { username, password };
    // console.log("data is : ", data);

    let res = await fetch(`/api/admin/login_user`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responce = await res.json();
    // console.log(responce);
    if (responce.success) {
      localStorage.setItem("admin", responce.admin);
      toast.success("Your are Successfully logged in.!");

      setTimeout(() => {
        router.push(`/Admin`);
      }, 2000);
    } else {
      toast.error(responce.error);
    }
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <style jsx global>{`
          footer {
            display: none;
          }
          header {
            display: none;
          }
        `}</style>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            mb: 8,
          }}
        >
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 15,
              px: 5,
              py: 3,
              borderRadius: 5,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Dashoboard Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              encType="application/json"
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    onChange={(e) => setusername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="remember me" color="primary" />}
                    label="Remember Me."
                  />
                </Grid>
              </Grid>
              <Button
                style={{
                  borderRadius: 35,
                  backgroundColor: "#21b6ae",
                  padding: "10px 16px",
                  fontSize: "15px",
                }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign IN
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                  <a> 
                    Dont have Account? Contact Admin to Register
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default User;
