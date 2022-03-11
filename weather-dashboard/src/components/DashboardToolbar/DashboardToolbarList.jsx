import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TableViewIcon from "@mui/icons-material/TableView";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoginIcon from "@mui/icons-material/Login";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import PersonIcon from "@mui/icons-material/Person";
import {useTranslation} from 'react-i18next';
const DashboardToolbarList = () => {
    const {t,i18n} = useTranslation();
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
              {t('asghar')}
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link>
        {" "}
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(255, 255, 255)",
              width: "100%",
              padding: " 0.7rem 0.825rem",
              margin: "0.09375rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <TableViewIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Tables
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link>
        {" "}
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(255, 255, 255)",
              width: "100%",
              padding: " 0.7rem 0.825rem",
              margin: "0.09375rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <ReceiptLongIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Billing
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link>
        {" "}
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(255, 255, 255)",
              width: "100%",
              padding: " 0.7rem 0.825rem",
              margin: "0.09375rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <FormatTextdirectionRToLIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Rtl
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link>
        {" "}
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(255, 255, 255)",
              width: "100%",
              padding: " 0.7rem 0.825rem",
              margin: "0.09375rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <NotificationsIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Notifications
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link>
        {" "}
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(255, 255, 255)",
              width: "100%",
              padding: " 0.7rem 0.825rem",
              margin: "0.09375rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <PersonIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Profile
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link>
        {" "}
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(255, 255, 255)",
              width: "100%",
              padding: " 0.7rem 0.825rem",
              margin: "0.09375rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <LoginIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Sign In
            </Typography>
          </Box>
        </ListItem>
      </Link>
      <Link>
        {" "}
        <ListItem sx={{ padding: "0rem 0rem 0rem 0rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "rgb(255, 255, 255)",
              width: "100%",
              padding: " 0.7rem 0.825rem",
              margin: "0.09375rem 1rem",
              borderRadius: "0.375rem",
              cursor: "pointer",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <AssignmentIcon sx={{ color: "rgb(255,255,255)" }} />
            </ListItemIcon>
            <Typography
              variant="span"
              sx={{
                fontSize: "0.875rem",
                paddingLeft: "0.9rem",
                fontWeight: "600",
              }}
            >
              Sign Up
            </Typography>
          </Box>
        </ListItem>
      </Link>
    </List>
  );
};
export default DashboardToolbarList;
