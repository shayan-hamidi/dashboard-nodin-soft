import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import dashboardLogo from "./dashboard.png";
import DashboardToolbarButton from "./DashboardToolbarButton";
import DashboardToolbarList from "./DashboardToolbarList";
import { Drawer } from "@mui/material";
import { useState } from "react";

const DashboardToolbar = ({drawerDir}) => {
  return (
    <Drawer
      elevation={0}
      variant="permanent"
      anchor={drawerDir}
    >
      <Paper
        sx={{
          background:
            "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
          height: "91.1vh",
          width: "17rem",
          position: "fixed",
          transition:
            " width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, background-color 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          margin: "1rem 0rem 0rem 1rem",
          borderRadius: "0.75rem",
          paddingTop: "1.8rem",
          boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem",
          display: "flex",
          flexDirection: "column",
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
        }}
      >
        <Box>
          <Link
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
              color: "rgb(255,255,255)",
              letterSpacing: "0.01rem",
              fontWeight: "bold",
            }}
            href="#"
          >
            <img src={dashboardLogo} width="30rem" alt="dashboardLogo" /> &nbsp;
            <Typography
              variant="body1"
              sx={{ fontSize: "0.875rem", fontWeight: "bold" }}
            >
              Material Dashboard 2
            </Typography>
          </Link>
        </Box>
        <Divider
          sx={{
            flexShrink: "0",
            borderTop: "0px solid rgba(0, 0, 0, 0.08)",
            borderRight: "0px solid rgba(0, 0, 0, 0.08)",
            borderLeft: "0px solid rgba(0, 0, 0, 0.08)",
            height: "0.0625rem",
            margin: "1rem 0px",
            borderBottom: "none",
            opacity: "0.25",
            backgroundColor: "transparent",
            marginTop: "1.5rem",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255), rgba(255, 255, 255, 0)) !important",
          }}
        />
        <DashboardToolbarList />
        <Box
          sx={{
            alignSelf: "center",
            marginTop: "7.1rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <DashboardToolbarButton />
        </Box>
      </Paper>
    </Drawer>
  );
};
export default DashboardToolbar;
