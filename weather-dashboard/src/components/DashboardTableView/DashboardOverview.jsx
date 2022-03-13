import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SingleOverView from "./SingleOverView";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
const DashboardOverview = () => {
  const extraStyles = {
    content: `""`,
    position: "absolute",
    top: "10rem",
    left: "1.9rem",
    height: "60%",
    opacity: "1",
    zIndex: "0",
    borderRight: "0.125rem solid rgb(222, 226, 230)",
  };
  return (
    <Paper
      sx={{
        color: " rgba(0, 0, 0, 0.87)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: "0px",
        overflowWrap: "break-word",
        backgroundcolor: "rgb(255, 255, 255)",
        backgroundClip: "border-box",
        border: "0px solid rgba(0, 0, 0, 0.125)",
        borderRadius: "0.75rem",
        boxShadow:
          "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
        overflow: "visible",
        height: "100%",
      }}
    >
      <Box
        sx={{ paddingTop: "24px", paddingLeft: "24px", paddingRight: "24px" }}
      >
        <Typography variant="h6">Orders overview</Typography>
        <Box sx={{ marginTop: "0.7rem" }}>
          <Typography
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <ArrowUpwardIcon
              sx={{
                color: "rgb(76, 175, 80)",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            />{" "}
            <Typography
              sx={{
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                letterSpacing: "0.02857em",
                opacity: "1",
                textTransform: "none",
                verticalAlign: "unset",
                textDecoration: "none",
                color: "rgb(123, 128, 154)",
                fontWeight: "600",
                paddingLeft: "5px",
              }}
            >
              24%
            </Typography>
            &nbsp; This month
          </Typography>
        </Box>
      </Box>
      <Box sx={{ padding: "16px", marginTop: "2.6rem" }}>
        <SingleOverView
          bgOverViewIcon={"rgb(76, 175, 80)"}
          iconComponent={NotificationsIcon}
          title={"$2400, Design changes"}
          subTitle={"22 DEC 7:20 PM"}
          extraStyles={extraStyles}
        />
        <SingleOverView
          bgOverViewIcon={"rgb(244, 67, 53)"}
          iconComponent={Inventory2Icon}
          title={"New order #1832412"}
          subTitle={"21 DEC 11 PM"}
          extraStyles={extraStyles}
        />
        <SingleOverView
          bgOverViewIcon={"rgb(26, 115, 232)"}
          iconComponent={ShoppingCartIcon}
          title={"Server payments for April"}
          subTitle={"21 DEC 9:34 PM"}
          extraStyles={extraStyles}
        />
        <SingleOverView
          bgOverViewIcon={"rgb(251, 140, 0)"}
          iconComponent={PaymentIcon}
          title={"New card added for order #4395133"}
          subTitle={"20 DEC 2:20 AM"}
          extraStyles={extraStyles}
        />
        <SingleOverView
          bgOverViewIcon={"rgb(233, 30, 99)"}
          iconComponent={VpnKeyIcon}
          title={"New card added for order #4395133"}
          subTitle={"18 DEC 4:54 AM"}
          extraStyles={extraStyles}
        />
      </Box>
    </Paper>
  );
};
export default DashboardOverview;