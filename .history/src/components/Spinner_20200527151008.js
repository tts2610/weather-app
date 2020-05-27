import React from "react";
let Spinner = require("react-spinkit");
export default function MySpinner() {
  return (
    <div className="spinner">
      <Spinner name="pacman" color="purple" fadeIn="quarter" />
    </div>
  );
}
