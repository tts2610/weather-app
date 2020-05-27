import React from "react";
let Spinner = require("react-spinkit");
export default function MySpinner() {
  return (
    <div className="spinner">
      <Spinner
        name="ball-pulse-rise"
        overrideSpinnerClassName="myCustomSpinner"
        color="orange"
        fadeIn="half"
      />
    </div>
  );
}
