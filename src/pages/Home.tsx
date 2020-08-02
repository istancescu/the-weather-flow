import React, { ReactElement } from "react";
import NavBar from "../components/NavBar/NavBar";
import { celtic_blue } from "../utils/colors";

interface Props {}

function Home({  }: Props): ReactElement {
  return (
    <div style={{ backgroundColor: celtic_blue }}>
      <NavBar />
    </div>
  );
}

export default Home;
