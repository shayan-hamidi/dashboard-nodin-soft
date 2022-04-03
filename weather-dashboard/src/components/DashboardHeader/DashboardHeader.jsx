import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import i18n from "../../i18n";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const DashboardHeader = (props) => {
  const [alignment, setAlignment] = useState("english");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  const { t, i18n } = useTranslation();
  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      if (ln == "pe") {
        document.body.setAttribute("dir", "rtl");
        props.setDrawerDir("right");
      } else {
        document.body.setAttribute("dir", "ltr");
        props.setDrawerDir("left");
      }
    };
  };

  return (
    <Grid
      container
      className={nav ? "dashboardNav active" : "dashboardNav"}
      sx={{ width: { xs: "100%", lg: "75%" } }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {" "}
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Link color="inherit" href="/">
            <HomeIcon sx={{ fontSize: "1.1rem", paddingTop: "0.4rem" }} />
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            sx={{ textDecoration: "none", cursor: "auto" }}
          >
            {t("Dashboard")}
          </Link>
        </Breadcrumbs>
        <Typography variant="h6" sx={{ fontWeight: "700", fontSize: "1rem" }}>
          {t("Dashboard")}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <ToggleButtonGroup
          sx={{ marginRight: "1rem", padding: "1rem",height:"40px",direction:"ltr"}}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="english" onClick={changeLanguage("en")}>
            English
          </ToggleButton>
          <ToggleButton value="persian" onClick={changeLanguage("pe")}>
            فارسی
          </ToggleButton>
        </ToggleButtonGroup>
        <TextField
          size="small"
          label="Search here"
          variant="outlined"
          sx={{ height: "60px", margin: "0rem 1rem" }}
        />
        <Link>
          <Button>
            <AccountCircleIcon sx={{ color: "rgb(123, 128, 154)" }} />
          </Button>
        </Link>
        <Link
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
          }}
        >
          <Button>
            <MenuOpenIcon sx={{ color: "rgb(123, 128, 154)" }} />
          </Button>
        </Link>
        <Link>
          <Button>
            <SettingsIcon sx={{ color: "rgb(123, 128, 154)" }} />
          </Button>
        </Link>
        <Link>
          <Button>
            <NotificationsIcon sx={{ color: "rgb(123, 128, 154)" }} />
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
export default DashboardHeader;
