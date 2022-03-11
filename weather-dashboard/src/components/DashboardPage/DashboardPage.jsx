import Grid from "@mui/material/Grid";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
function DashboardPage() {
  return (
    <>
      <Grid container sx={{width:"100%"}}>
        <Grid item sx={{width:"100%"}} xs={12}>
          <DashboardHeader/>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
