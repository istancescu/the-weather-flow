import React, { ReactElement } from "react";
import NavBar from "../components/NavBar/NavBar";

interface Props {}

function Home({  }: Props): ReactElement {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Home;
