import React from "react";
let Spinner = require("react-spinkit");
export default function MySpinner() {
  return (
    <div className="">
      <Spinner name="ball-pulse-rise spinner" color="orange" fadeIn="half" />
    </div>
  );
}
