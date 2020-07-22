import React from "react";
import spinner from "../../assets/spinner.gif";
import "./styles.css";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="Loading"
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
