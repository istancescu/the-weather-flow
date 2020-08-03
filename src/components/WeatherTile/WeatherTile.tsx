import React, { ReactNode } from "react";
import styles from "./WeatherTile.module.css";
import Logo from "../../assets/sun-line.svg";

interface Props {
  temperature: number;
  scale: string;
  city: string;
  country: string;
}

const WeatherContainer: React.FC = ({ children }) => {
  return (
    <div className={styles.weatherContainer}>
      <p className={styles.weatherTitle}>
        Find the weather you love, in the location you love.
      </p>
      <div className={styles.citiesContainer}>{children}</div>
    </div>
  );
};

const WeatherCard = ({ temperature, scale, city, country }: Props) => {
  return (
    <div className={styles.cities}>
      <div>
        <p className={styles.city}>
          {city}, {country}
        </p>
        <div className={styles.temperatureContainer}>
          <p className={styles.temperature}>
            {temperature} {scale}
          </p>
          <img className={styles.currentState} src={Logo} alt="current-state" />
        </div>
      </div>
    </div>
  );
};

export const WeatherList = ({ data }: any): JSX.Element => {
  const Items = data.map(({ temperature, scale, city, country }: Props) => (
    <WeatherCard
      temperature={temperature}
      scale={scale}
      city={city}
      country={country}
    />
  ));
  return <WeatherContainer>{Items}</WeatherContainer>;
};

export default WeatherCard;
