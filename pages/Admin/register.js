import AllAdmin from "../../src/components/dashboard/allAdmin";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Router from "next/router";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

const register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  // storing errors in state
  const [Confirm_errors, setConfirm_Errors] = useState(false);
  const [length_errors, setLength_Errors] = useState(false);

  // destructuring form data
  const { username, email, password, cPassword } = formData;

  // handling form data sending it to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setLength_Errors(true);
    }
    if (password !== cPassword) {
      setConfirm_Errors(true);
    }
    const finalData = { username, email, password };
    console.log("final data is: ", finalData);
    try {
      let res = await fetch(`/api/admin/register_user`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });
      const response = await res.json();
      // console.log(response);
      toast.success("Your Account are Created Successfully.!  ", response);
      Router.push("/Admin/login");
    } catch (error) {
      toast.error("An error occurred while registering.");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <style jsx global>{`
          footer {
            display: none;
          }
          header {
            display: none;
          }
        `}</style>
        <FullLayout>
          <Grid container spacing={0}>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Grid item xs={12} lg={8}>
              <BaseCard title="Create Admin">
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      type="username"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      label="Username"
                      required
                    />
                    <TextField
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      label="Email"
                      required
                    />
                    <TextField
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      label="Password"
                      required
                    />
                    <TextField
                      type="cPassword"
                      name="cPassword"
                      id="cPassword"
                      value={formData.cPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, cPassword: e.target.value })
                      }
                      label="Conferm Password"
                      required
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remember Me."
                      />
                    </FormGroup>
                  </Stack>
                  <br />
                  <Button
                    style={{
                      backgroundColor: "#21b6ae",
                      padding: "10px 16px",
                      text: "primary",
                      color: "white",
                    }}
                    type="submit"
                    variant="outlined"
                    mt={2}
                  >
                    Register Admin
                  </Button>
                </form>
              </BaseCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              <AllAdmin />
            </Grid>
          </Grid>
        </FullLayout>
      </ThemeProvider>
    </>
  );
};

export default register;
