import React, { ReactElement } from "react";
import styles from "./WeatherTile.module.css";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const WeatherBox = (): ReactElement => (
  <Grid item xs zeroMinWidth>
    <Box
      className={styles.cities}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      p={2}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <WbSunnyIcon style={{ color: "white" }} />
        <Typography style={{ color: "white" }} noWrap>
          Iasi, RO
        </Typography>
      </Box>
      <Box>
        <Typography style={{ color: "white" }} noWrap>
          21 C°
        </Typography>
      </Box>
    </Box>
  </Grid>
);

const WeatherTile = () => {
  return (
    <Container maxWidth="md" className={styles.weatherContainer}>
      <Box component="span" m={2}>
        <Typography style={{ fontSize: "1.4em" }} align="center">
          Find the weather you love, in the location you love.
        </Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid container spacing={3}>
          <WeatherBox />
          <WeatherBox />
          <WeatherBox />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeatherTile;
