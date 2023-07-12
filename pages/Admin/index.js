import { Grid } from "@mui/material";
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../../src/components/dashboard/allProduct";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin")) {
      router.push("/Admin");
    } else {
      router.push("/Admin/login");
    }
  }, []);
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
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerfomance />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
