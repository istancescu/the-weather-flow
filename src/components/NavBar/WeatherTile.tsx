import React from "react";
import styles from "./WeatherTile.module.css";
import Logo from "../../assets/sun-line.svg";

interface Props {}

const WeatherTile = (props: Props) => {
  return (
    <div className={styles.weatherContainer}>
      <p className={styles.weatherTitle}>
        Find the weather you love, in the location you love.
      </p>
      <div className={styles.citiesContainer}>
        <div className={styles.cities}>
          <div>
            <p className={styles.city}>Iasi, Romania</p>
            <div className={styles.temperatureContainer}>
              <p className={styles.temperature}>21 C</p>
              <img
                className={styles.currentState}
                src={Logo}
                alt="current-state"
              />
            </div>
          </div>
        </div>
        <div className={styles.cities}>
          <div>
            <p className={styles.city}>Iasi, Romania</p>
            <div className={styles.temperatureContainer}>
              <p className={styles.temperature}>21 C</p>
              <img
                className={styles.currentState}
                src={Logo}
                alt="current-state"
              />
            </div>
          </div>
        </div>
        <div className={styles.cities}>
          <div>
            <p className={styles.city}>Iasi, Romania</p>
            <div className={styles.temperatureContainer}>
              <p className={styles.temperature}>21 C</p>
              <img
                className={styles.currentState}
                src={Logo}
                alt="current-state"
              />
            </div>
          </div>
        </div>
        <div className={styles.cities}>
          <div>
            <p className={styles.city}>Iasi, Romania</p>
            <div className={styles.temperatureContainer}>
              <p className={styles.temperature}>21 C</p>
              <img
                className={styles.currentState}
                src={Logo}
                alt="current-state"
              />
            </div>
          </div>
        </div>
        <div className={styles.cities}>
          <div>
            <p className={styles.city}>Iasi, Romania</p>
            <div className={styles.temperatureContainer}>
              <p className={styles.temperature}>21 C</p>
              <img
                className={styles.currentState}
                src={Logo}
                alt="current-state"
              />
            </div>
          </div>
        </div>
        <div className={styles.cities}>
          <div>
            <p className={styles.city}>Iasi, Romania</p>
            <div className={styles.temperatureContainer}>
              <p className={styles.temperature}>21 C</p>
              <img
                className={styles.currentState}
                src={Logo}
                alt="current-state"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherTile;
