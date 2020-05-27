import React from "react";
let Spinner = require("react-spinkit");
export default function MySpinner() {
  return (
    <div className="spinner">
      <Spinner
        className="inner-spinner"
        name="pacman"
        color="purple"
        fadeIn="half"
      />
    </div>
  );
}
