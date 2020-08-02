import React, { ReactElement } from "react";
import { ghost_white, celtic_blue } from "../../utils/colors";
import styles from "./NavBar.module.css";

interface Props {}

export default function NavBar({  }: Props): ReactElement {
  return (
    <head className={styles.container}>
      <p className={styles.pageTitle}>The Weather Flow</p>
      <div>
        <a className={styles.navBarLink}>Features</a>
        <a className={styles.navBarLink} href="/">
          Get started
        </a>
      </div>
    </head>
  );
}
