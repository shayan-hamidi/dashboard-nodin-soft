import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import i18n from "../../i18n";

const DashboardHeader = () => {
  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Link color="inherit" href="/">
            <HomeIcon sx={{ fontSize: "1.1rem", paddingTop: "0.4rem" }} />
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/getting-started/installation/"
          >
            Dashboard
          </Link>
        </Breadcrumbs>
        <Typography variant="h6">Dashboard</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ width: "100%", clear: "both", display: "table" }}
        >
          <Button
            onClick={changeLanguage("pe")}
            sx={{ width: "50%", border: "1px solid gray" }}
          >
            فارسی
          </Button>
          <Button
            onClick={changeLanguage("en")}
            sx={{ width: "50%", border: "1px solid gray" }}
          >
            English
          </Button>
        </Box>
        <TextField id="outlined-basic" label="Search here" variant="outlined" />
        <Link>
          <Button>
            <AccountCircleIcon />
          </Button>
        </Link>
        <Link>
          <Button>
            <SettingsIcon />
          </Button>
        </Link>
        <Link>
          <Button>
            <NotificationsIcon />
          </Button>
        </Link>
      </Box>
    </header>
  );
};
export default DashboardHeader;
