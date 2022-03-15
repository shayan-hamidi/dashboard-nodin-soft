import Grid from "@mui/material/Grid";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
function DashboardPage(props) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <DashboardHeader drawerDir={props.drawerDir} setDrawerDir={props.setDrawerDir} />
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
