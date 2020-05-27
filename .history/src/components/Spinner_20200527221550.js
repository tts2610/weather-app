import React from "react";
let Spinner = require("react-spinkit");
import ReactDelayRender from "react-delay-render";
function MySpinner() {
  return (
    <div className="spinner">
      <Spinner name="pacman" color="blue" fadeIn="half" />
    </div>
  );
}

export default ReactDelayRender({ delay: 500 })(MySpinner);
