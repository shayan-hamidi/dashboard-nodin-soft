import {
  Avatar,
  Box,
  LinearProgress,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
const TableSingleRow = ({
  userLogo,
  logo,
  logoName,
  budget,
  progressiveValue,
  progressiveBg,
}) => {
  return (
    <TableRow>
      <TableCell sx={{padding:"0.7rem"}} component="td">
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Avatar
              sx={{
                borderRadius: "0rem",
                backgroundColor: "transparent",
              }}
            >
              <img width={"40rem"} src={logo} alt={"logo"} />
            </Avatar>
            <Typography
              sx={{
                color: "rgb(52, 71, 103)",
                fontWeight: "600",
                marginLeft: "8px",
              }}
            >
              {logoName}
            </Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell component="td">
        {" "}
        <Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            <Avatar
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                transition: "all 200ms ease-in-out 0s",
                flexShrink: "0",
                cursor: "pointer",
              }}
            >
              <img width="25rem" src={userLogo} alt={"userLogo"} />
            </Avatar>
            <Avatar
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                transition: "all 200ms ease-in-out 0s",
                flexShrink: "0",
                cursor: "pointer",
                marginLeft: "-10px",
              }}
            >
              <img width="25rem" src={userLogo} alt={"userLogo"} />
            </Avatar>
            <Avatar
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                transition: "all 200ms ease-in-out 0s",
                flexShrink: "0",
                marginLeft: "-10px",
                cursor: "pointer",
              }}
            >
              <img width="25rem" src={userLogo} alt={"userLogo"} />
            </Avatar>
            <Avatar
              sx={{
                width: "1.5rem",
                height: "1.5rem",
                transition: "all 200ms ease-in-out 0s",
                flexShrink: "0",
                marginLeft: "-10px",
                cursor: "pointer",
              }}
            >
              <img width="25rem" src={userLogo} alt={"userLogo"} />
            </Avatar>
          </Box>
        </Box>
      </TableCell>
      <TableCell component="td">
        {" "}
        <Box>
          <Typography
            variant="span"
            sx={{ color: "rgb(123, 128, 154)", fontWeight: "600" }}
          >
            {budget}
          </Typography>
        </Box>
      </TableCell>
      <TableCell component="td">
        {" "}
        <Box>
          <Box sx={{ width: "8rem", textAlign: "left" }}>
            <LinearProgress
              variant="determinate"
              color={progressiveBg}
              value={progressiveValue}
              sx={{
                display: "block",
                zIndex: "0",
                height: "0.375rem",
                borderRadius: "0.375rem",
                position: "relative",
                backgroundColor: "rgb(240, 242, 245)",
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
};
export default TableSingleRow;
