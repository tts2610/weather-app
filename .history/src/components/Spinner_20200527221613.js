import React from "react";
import ReactDelayRender from "react-delay-render";
let Spinner = require("react-spinkit");

function MySpinner() {
  return (
    <div className="spinner">
      <Spinner name="pacman" color="blue" fadeIn="half" />
    </div>
  );
}

export default ReactDelayRender({ delay: 2000 })(MySpinner);
