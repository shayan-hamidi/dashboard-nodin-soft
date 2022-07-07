import { Box, Divider, Paper, Typography } from "@mui/material";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { useTranslation } from "react-i18next";
const CompletedTasksStatic = () => {
  const { t } = useTranslation();
  const options = {
    chart: {
      backgroundColor: "transparent",
      height: 200,
      width: 330,
      style: {
        marginTop: "13",
        marginRight: "5",
        height: "240",
      },
    },
    title: {
      text: "",
    },

    subtitle: {
      text: "",
    },

    yAxis: {
      style: {
        color: "white",
      },
      min: 0,
      title: {
        text: "",
      },
      max: 600,
      tickInterval: 200,
    },

    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      showInLegend: false,
      symbolHeight: 0,
      symbolWidth: 0,
      symbolRadius: 0,
      x: -10,
      y: 100,
      borderWidth: 0,

      labelFormatter: function () {
        if ((this.name = "Series 1")) {
          return this.name;
        } else {
          return "Legend";
        }
      },
    },
    credits: {
      enabled: false,
    },

    plotOptions: {
      column: {
        pointPadding: 0.15,
        borderWidth: 0,
        showInLegend: false,
      },
      series: {
        color: "white",
      },
    },

    series: [
      {
        name: "Desktop apps",
        data: [10, 5, 300, 200, 500, 210, 400, 200, 490],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
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
              paddingRight: "4px",
              marginTop: "-40px",
              height: "200px",
              opacity: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
              color: "rgb(52, 71, 103)",
              borderRadius: "0.5rem",
              boxShadow:
                "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(64 64 64 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem",
            }}
          >
            <HighchartsReact highcharts={Highcharts} options={options} />
          </Box>
          <Box sx={{ padding: "24px 8px 8px" }}>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "1.85",
                paddingBottom: "0.2rem",
                fontWeight: "700",
                letterspacing: "0.0075em",
                textTransform: "capitalize",
                color: "rgb(52, 71, 103)",
              }}
            >
              {t("Completed Tasks")}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                lineHeight: "1.5",
                letterspacing: "0.02857em",
                color: "rgb(123, 128, 154)",
                fontWeight: "300",
              }}
            >
              {t("Last Campaign Performance")}
            </Typography>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ScheduleIcon
                sx={{
                  color: "rgb(123, 128, 154)",
                  width: "1rem",
                  paddingLeft: "0.2rem",
                  paddingRight: "0.2rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: "1.5",
                  letterspacing: "0.02857em",
                  color: "rgb(123, 128, 154)",
                  fontWeight: "300",
                }}
              >
                {t("just updated")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
export default CompletedTasksStatic;
