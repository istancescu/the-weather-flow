import React, { ReactElement } from "react";
import NavBar from "../components/NavBar/NavBar";
import styles from "./Home.module.css";
import { WeatherList } from "../components/WeatherTile/WeatherTile";

interface Props {}

const Data = [
  {
    country: "RO",
    temperature: 20,
    scale: "C",
    city: "Bucuresti"
  },
  {
    country: "RO",
    temperature: 20,
    scale: "C",
    city: "Iasi"
  }
];

function Home({  }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Find weather anywhere, at any time.</h1>
        <p className={styles.description}>
          Tired of the need to carry an umbrella?
        </p>
        <div className={styles.descriptionContainer}>
          <p className={styles.description} style={{ fontWeight: "bold" }}>
            The Weather Flow {"\b"}
          </p>
          <span className={styles.description}>is the perfect solution!</span>
        </div>
        <p className={styles.description}>Simple as it sounds.</p>
        <WeatherList data={Data} />
      </div>
    </div>
  );
}

export default Home;
