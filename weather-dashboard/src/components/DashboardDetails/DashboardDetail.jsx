import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
const DashboardDetail = ({
  iconComponent: IconComponent,
  bgLogo,
  bgShadow,
  title,
  number,
  percent,
  time,
}) => {
  return (
    <Box>
      <Paper
        sx={{
          color: "rgba(0, 0, 0, 0.87)",
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "-3rem 0rem 0rem 1rem",
            }}
          >
            <Typography
              variant="span"
              sx={{
                background: bgLogo,
                padding: "1.2rem 1.3rem 1.1rem 1.3rem",
                borderRadius: "0.7rem",
                boxShadow: bgShadow,
              }}
            >
              <IconComponent sx={{ color: "white" }} />
            </Typography>
          </Box>
          <Box
            sx={{
              paddingRight: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography variant="subtitle1">{title}</Typography>{" "}
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "rgb(52,71,103)" }}
            >
              {number}
            </Typography>
          </Box>
        </Box>
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
        />
        <Box>
          <Typography
            variant="body1"
            sx={{ paddingLeft: "1rem", paddingBottom: "1rem" }}
          >
            <Typography variant="span" sx={{ color: "green" }}>
              {percent}
            </Typography>
            &nbsp;{time}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
export default DashboardDetail;
