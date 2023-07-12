import AllAdmin from "../../src/components/dashboard/allAdmin";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import React from "react";

const viewAdmin = () => {
  return (
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
          <Grid item xs={12} lg={5}>
            <AllAdmin />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default viewAdmin;
