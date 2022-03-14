import DashboardToolbar from "./components/DashboardToolbar/DashboardToolbar";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import DashboardDetails from "./components/DashboardDetails/DashboardDetails";
import Dashboardstatistics from "./components/Dashboardstatistics/Dashboardstatistics";
import DashboardTableView from "./components/DashboardTableView/DashboardTableView";
import DashboardWeatherCard from "./components/DashboardWeatherCard/DashboardWeatherCard"
import { Box } from "@mui/system";
import "./App.css";
import { Grid } from "@mui/material";
function App() {
  return (
    <Grid container spacing={3} sx={{ display: "flex", flexDirection: "row" }}>
      <Grid item lg={2.6} >
      <DashboardToolbar />
      </Grid>
      <Grid xs={12} lg={9} item>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"center",
        }}
      >
        <DashboardPage />
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
