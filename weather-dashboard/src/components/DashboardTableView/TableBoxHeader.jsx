import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
const TableBoxHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            margin: "0px 0px 0.35em",
            fontSize: "1rem",
            fontWeight: "700",
            letterSpacing: "0.0075em",
            color: "rgb(52, 71, 103)",
            paddingBottom: "0.4rem",
          }}
        >
          Projects
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <DoneIcon
            sx={{
              width: "1em",
              height: "1em",
              fontWeight: "bold",
              color: "rgb(26, 115, 232)",
              marginTop: "-2px",
              fontSize: "1.5rem",
            }}
          />
          <Typography
            sx={{
              color: "rgb(123, 128, 154)",
              fontWeight: "800",
              padding: "0rem 0.2rem",
              fontSize: "0.9rem",
            }}
          >
            30 done
          </Typography>
          &nbsp;
          <Typography sx={{ color: "rgb(123, 128, 154)", fontSize: "0.9rem" }}>
            this month
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          color: "rgb(123, 128, 154)",
        }}
      >
        <MoreVertIcon
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Action</MenuItem>
          <MenuItem onClick={handleClose}>Another action</MenuItem>
          <MenuItem onClick={handleClose}>Something else</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};
export default TableBoxHeader;
