import {  Typography } from "@mui/material";
import { Box } from "@mui/system";
const SingleOverView = ({iconComponent: IconComponent,beforeStyles,afterStyles,bgOverViewIcon,title,subTitle}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "::after": afterStyles,
        "::before": beforeStyles,
        marginBottom:"2rem"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          backgroundColor:bgOverViewIcon,
          padding: "0.3rem",
          width: "1.4rem",
          height: "1.4rem",
          zIndex:"1",
          marginLeft:"1rem"
        }}
      >
        <IconComponent sx={{ color: "white", fontSize: "1rem" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "1.3rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.875rem",
            lineHeight: "1.5",
            letterSpacing: "0.02857em",
            color: "rgb(52, 71, 103)",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "0.75rem",
            fontWeight: "300",
            lineHeight: "1.25",
            letterspacing: "0.03333em",
            color: "rgb(123, 128, 154)",
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
export default SingleOverView;
