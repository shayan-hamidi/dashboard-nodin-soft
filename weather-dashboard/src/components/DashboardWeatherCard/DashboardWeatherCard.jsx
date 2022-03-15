import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import WeatherIcon from "../../WeatherIcon.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const DashboardWeatherCard = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // useEffect(()=>{
  //     axios.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2ad622963b956f73c2e0395cb01fad6b").then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //     });

  // },[])
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2ad622963b956f73c2e0395cb01fad6b`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  const searchHandler = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };
  return (
    <Paper
      sx={{
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowWrap: "break-word",
        backgroundColor: "rgb(255, 255, 255)",
        backgroundClip: "border-box",
        border: "0px solid rgba(0, 0, 0, 0.125)",
        borderRadius: "0.75rem",
        boxShadow:
          "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
        marginBottom: "2rem",
        padding: "2rem",
        width: "80%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: "4rem",
        }}
      >
        {t("Weather Detector")}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          color: "white",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Grid
            container
            rowSpacing={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {/* <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                // options={data.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    label="Weather Condition"
                    variant="standard"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter Location"
                    sx={{ width: "90%" }}
                  />
                )}
              /> */}
              <TextField
                label="Weather Condition"
                variant="standard"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={searchLocation}
                placeholder="Enter Location"
                type="text"
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Button
                sx={{
                  padding: "0.7rem 1rem",
                  background: "lightBlue",
                  color: "black",
                  fontWeight: "700",
                  boxShadow:
                    "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",

                  ":hover": {
                    background: "linear-gradient(#222865,#79b7e4)",
                    color: "white",
                  },
                }}
                onClick={searchHandler}
              >
                {t("Search City")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Box
            sx={{
              background: "linear-gradient(#222865,#79b7e4)",
              padding: "2rem",
              boxShadow:
                "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
              borderRadius: "0.75rem",
              border: "0px solid rgba(0, 0, 0, 0.125)",
            }}
          >
            {!data.name && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={WeatherIcon} width={"200"} alt={"WeatherIcon"} />
              </Box>
            )}
            <Box>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", paddingBottom: "1.5rem" }}
                >
                  {data.name}
                </Typography>
              </Box>
              <Box>
                {data.main ? (
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    {data.main.temp.toFixed()}°F
                  </Typography>
                ) : null}
              </Box>
              <Box>
                {data.weather ? (
                  <Typography
                    sx={{ textAlign: "center", paddingBottom: "1rem" }}
                  >
                    {data.weather[0].main}
                  </Typography>
                ) : null}
              </Box>
            </Box>
            {data.name !== undefined && (
              <Box>
                <Box>
                  {data.main ? (
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      {data.main.feels_like.toFixed()}°F
                    </Typography>
                  ) : null}
                  <Typography
                    sx={{ textAlign: "center", paddingBottom: "1rem" }}
                  >
                    Feels Like
                  </Typography>
                </Box>
                <Box>
                  {data.wind ? (
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                      {data.wind.speed.toFixed()} MPH
                    </Typography>
                  ) : null}
                  <Typography sx={{ textAlign: "center" }}>
                    Wind Speed
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default DashboardWeatherCard;
