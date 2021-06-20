import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <Banner />
      </div>
    </>
  );
};

export default App;
