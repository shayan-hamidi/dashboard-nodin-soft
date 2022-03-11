import Grid from "@mui/material/Grid";
import WeekendIcon from "@mui/icons-material/Weekend";
import DashboardDetail from "./DashboardDetail";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const DashboardDetails = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ display: "flex", flexDirection: "row", marginTop: "2.2rem" }}
    >
      <Grid item xs={3}>
        <DashboardDetail
          iconComponent={WeekendIcon}
          bgLogo={"linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"}
          bgShadow={
            "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(64 64 64 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem"
          }
          title={"Bookings"}
          number={281}
          percent={"+55%"}
          time={"than last week"}
        />
      </Grid>
      <Grid item xs={3}>
        <DashboardDetail
          iconComponent={LeaderboardIcon}
          bgLogo={
            "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));"
          }
          bgShadow={
            "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem"
          }
          title={"Today's Users"}
          number={"2,300"}
          percent={"+3%"}
          time={"than last month"}
        />
      </Grid>
      <Grid item xs={3}>
        <DashboardDetail
          iconComponent={StoreIcon}
          bgLogo={
            "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71));"
          }
          bgShadow={
            "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(76 175 79 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem"
          }
          title={"Revenue"}
          number={"34k"}
          percent={"+1%"}
          time={"than yesterday"}
        />
      </Grid>
      <Grid item xs={3}>
        <DashboardDetail
          iconComponent={PersonAddIcon}
          bgLogo={
            "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96));"
          }
          bgShadow={
            "rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(233 30 98 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem"
          }
          title={"Followers"}
          number={"+91"}
          time={"Just updated"}
        />
      </Grid>
    </Grid>
  );
};
export default DashboardDetails;