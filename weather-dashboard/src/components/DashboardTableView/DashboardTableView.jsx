import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DashboardOverview from "./DashboardOverview"
import TableSingleRow from "./TableSingleRow";
const DashboardTableView = () => {
  return (
    <Box sx={{ margin: "10rem 0rem" }}>
      <Grid container spacing={3} sx={{ display: "flex", flexFlow: "row wrap" }}>
        <Grid item xs={12} md={6} lg={8}>
          <Paper
            sx={{
              transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              minWidth: "0px",
              overflowWrap: "break-word",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundClip: "border-box",
              border: "0px solid rgba(0, 0, 0, 0.125)",
              borderRadius: "0.75rem",
              boxShadow:
                "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem",
              }}
            >
              <Box>
                <Typography>Projects</Typography>
                <Box>
                  <Typography></Typography>
                  <Typography>30 done</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  color: "rgb(123, 128, 154)",
                }}
              >
                <MoreVertIcon />
              </Box>
            </Box>
            <Box>
              <TableContainer
                sx={{
                  width: "100%",
                  overflowX: "auto",
                  backgroundColor: "rgb(255, 255, 255)",
                  borderRadius: "0.75rem",
                }}
              >
                <Table
                  sx={{
                    display: "table",
                    width: "100%",
                    bordercollapse: "collapse",
                    borderSpacing: "0px",
                  }}
                >
                  <TableHead>
                    <TableRow
                      sx={{ display: "table-row", verticalAlign: "middle" }}
                    >
                      <TableCell>
                        <Box>companies</Box>
                      </TableCell>
                      <TableCell>
                        <Box>members</Box>
                      </TableCell>
                      <TableCell>
                        <Box>budget</Box>
                      </TableCell>
                      <TableCell>
                        <Box>completion</Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableSingleRow
                      logo={
                        "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg"
                      }
                      logoName={"Material UI XD Version"}
                      budget={"$14,000"}
                      progressiveValue={"60"}
                      progressiveBg={"primary"}
                    />
                    <TableSingleRow
                      logo={
                        "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg"
                      }
                      logoName={"Add Progress Track"}
                      budget={"$3,000"}
                      progressiveValue={"10"}
                      progressiveBg={"primary"}
                    />
                    <TableSingleRow
                      logo={
                        "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg"
                      }
                      logoName={"Fix Platform Errors"}
                      budget={"Not set"}
                      progressiveValue={"100"}
                      progressiveBg={"success"}
                    />
                    <TableSingleRow
                      logo={
                        "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg"
                      }
                      logoName={"Launch our Mobile App"}
                      budget={"$20,500"}
                      progressiveValue={"100"}
                      progressiveBg={"success"}
                    />
                    <TableSingleRow
                      logo={
                        "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg"
                      }
                      logoName={"Add the New Pricing Page"}
                      budget={"$500"}
                      progressiveValue={"20"}
                      progressiveBg={"primary"}
                    />
                    <TableSingleRow
                      logo={
                        "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg"
                      }
                      logoName={"Redesign New Online Shop"}
                      budget={"$2,000"}
                      progressiveValue={"30"}
                      progressiveBg={"primary"}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}><DashboardOverview /></Grid>
      </Grid>
    </Box>
  );
};
export default DashboardTableView;
