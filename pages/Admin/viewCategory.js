import ProductPerfomance from "../../src/components/dashboard/allCategory";
import { Grid, Pagination, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import React from "react";

const viewCategory = () => {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;..
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
        <Grid item xs={12} lg={15}>
          <Stack spacing={2}>
            <Pagination count={10} color="primary" />
          </Stack>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default viewCategory;
