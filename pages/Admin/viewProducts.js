import React from "react";
import ProductPerfomance from "../../src/components/dashboard/allProduct";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";

const viewProducts = () => {
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
          <Grid item xs={12} lg={12}>
            <ProductPerfomance />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default viewProducts;
