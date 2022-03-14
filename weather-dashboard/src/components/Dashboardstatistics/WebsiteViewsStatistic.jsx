import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
const WebsiteViewsStatistic = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      max: 60,
      tickInterval: 20,
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.15,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "",
        data: [49, 19.9, 106.4, 9, 21, 45, 40],
      },
    ],
  };

  return (
    <Box
      sx={{
        marginBottom: "24px",
        opacity: "1",
        background: "transparent",
      }}
    >
      <Paper
        sx={{
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minWidth: "0px",
          overflowWrap: "break-word",
          backgroundColor: "rgb(255, 255, 255)",
          backgroundClip: "border-box",
          border: "0px solid rgba(0, 0, 0, 0.125)",
          borderRadius: "0.75rem",
          boxShadow:
            "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
          overflow: "visible",
          height: "100%",
        }}
      >
        <Box sx={{ padding: "1rem" }}>
          <Box
            sx={{
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingRight: "4px",
              marginTop: "-40px",
              height: "12.5rem",
              opacity: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
              color: "rgb(52, 71, 103)",
              borderRadius: "0.5rem",
              boxShadow:
                "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
            }}
          >
            <HighchartsReact highcharts={Highcharts} options={options} />
          </Box>
          <Box sx={{ padding: "24px 8px 8px" }}>
            <Typography></Typography>
            <Typography></Typography>
            <Divider
              sx={{
                flexShrink: "0",
                borderTop: "0px solid rgba(0, 0, 0, 0.12)",
                borderRight: "0px solid rgba(0, 0, 0, 0.12)",
                borderLeft: "0px solid rgba(0, 0, 0, 0.12)",
                backgroundColor: "transparent",
                height: "0.0625rem",
                margin: "1rem 0px",
                borderBottom: "none",
                opacity: "0.25",
                backgroundImage:
                  "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) !important",
              }}
            ></Divider>
            <Box>
              <Typography></Typography>
              <Typography>campagn sent 2 days ago</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
export default WebsiteViewsStatistic;
