import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="bg-primary jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
