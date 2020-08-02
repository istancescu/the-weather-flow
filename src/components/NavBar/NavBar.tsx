import React, { ReactElement } from "react";
import { ghost_white, celtic_blue } from "../../utils/colors";
import styles from "./NavBar.module.css";

interface Props {}

export default function NavBar({  }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <p className={styles.pageTitle}>the-weather-flow</p>
      <a className={styles.getStarted} href="/">
        Get started
      </a>
    </div>
  );
}
