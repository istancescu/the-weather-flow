import React, { ReactElement } from "react";
import Logo from "../../assets/sun-line.svg";
import styles from "./NavBar.module.css";

interface Props {}

export default function NavBar({  }: Props): ReactElement {
  return (
    <head className={styles.container}>
      <div className={styles.logoContainer}>
        <p className={styles.pageTitle}>The Weather Flow</p>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <a className={styles.navBarLink} href="/">
          Features
        </a>
        <a className={styles.navBarLink} href="/">
          Get started
        </a>
      </div>
    </head>
  );
}
