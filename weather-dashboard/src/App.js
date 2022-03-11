import DashboardToolbar from "./components/DashboardToolbar/DashboardToolbar";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import DashboardDetails from "./components/DashboardDetails/DashboardDetails";
import Dashboardstatistics from "./components/Dashboardstatistics/Dashboardstatistics";
import { Box } from "@mui/system";
import "./App.css";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <DashboardToolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "73%",
          marginLeft: "3rem",
        }}
      >
        <DashboardPage />
        <DashboardDetails />
        <Dashboardstatistics />
      </Box>
    </div>
  );
}

export default App;
