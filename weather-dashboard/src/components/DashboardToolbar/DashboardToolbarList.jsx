import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
const DashboardToolbarList = () => {
  return (
    <List>
      <Link>
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background:
                  "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                color: "rgb(255, 255, 255)",
                width: "100%",
                padding: " 0.7rem 0.825rem",
                margin: "0.09375rem 1rem",
                borderRadius: "0.375rem",
                cursor: "pointer",
                userSelect: "none",
                whiteSpace: "nowrap",
                boxShadow:
                  "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
              }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <DashboardIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Dashboard
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link></Link>
      <Link></Link>
      <Link></Link>
      <Link></Link>
      <Link></Link>
      <Link></Link>
      <Link></Link>
    </List>
  );
};
export default DashboardToolbarList;
