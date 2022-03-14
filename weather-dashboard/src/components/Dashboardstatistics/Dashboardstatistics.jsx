import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import WebsiteViewsStatistic from "./WebsiteViewsStatistic";
import DailySalesStatistic from "./DailySalesStatistic";
import CompletedTasksStatistic from "./CompletedTasksStatistic";
const Dashboardstatistics = () => {
  return (
    <Box
      sx={{
        marginTop: "36px",
        opacity: "1",
        background: "transparent",
        color: "rgb(52, 71, 103)",
        boxShadow: "none",
      }}
    >
      <Grid container spacing={5} sx={{ display: "flex", backgroundColor: "red" }}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <WebsiteViewsStatistic />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <DailySalesStatistic />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <CompletedTasksStatistic />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboardstatistics;
