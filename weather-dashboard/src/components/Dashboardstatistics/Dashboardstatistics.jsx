import { Box, Grid } from "@mui/material";
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
      <Grid container spacing={2} sx={{ display: "flex" }}>
        <Grid item xs={12} sm={12} md={6} lg={4} sx={{maxWidth:"100%"}}>
          <WebsiteViewsStatistic />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} sx={{maxWidth:"100%"}}>
          <DailySalesStatistic />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} sx={{maxWidth:"100%"}}>
          <CompletedTasksStatistic />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboardstatistics;
