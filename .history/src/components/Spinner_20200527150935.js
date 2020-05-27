import React from "react";
let Spinner = require("react-spinkit");
export default function MySpinner() {
  return (
    <div className="spinner">
      <Spinner
        name="pacman"
        color="purple"
        fadeIn="half"
        style={{
          width: 200,
          height: 200,
          color: "#37FF8B",
          marginTop: "40vh",
          marginLeft: "45vw",
        }}
      />
    </div>
  );
}
