import Grid from "@mui/material/Grid";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
function DashboardPage() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <DashboardHeader/>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
