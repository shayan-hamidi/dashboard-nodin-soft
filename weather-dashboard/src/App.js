import DashboardToolbar from "./components/DashboardToolbar/DashboardToolbar";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import DashboardDetails from "./components/DashboardDetails/DashboardDetails";
import Dashboardstatistics from "./components/Dashboardstatistics/Dashboardstatistics";
import DashboardTableView from "./components/DashboardTableView/DashboardTableView";
import DashboardWeatherCard from "./components/DashboardWeatherCard/DashboardWeatherCard";
import { Box } from "@mui/system";
import "./App.css";
import { Grid } from "@mui/material";
import { useState } from "react";
function App() {
  const [drawerDir,setDrawerDir] =useState("left")
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <Grid item lg={2.9}>
        <DashboardToolbar drawerDir={drawerDir} />
      </Grid>
      <Grid xs={12} lg={8.8} item>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <DashboardPage drawerDir={drawerDir} setDrawerDir={setDrawerDir} />
          <DashboardDetails />
          <Dashboardstatistics />
          <DashboardTableView />
          <DashboardWeatherCard />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
