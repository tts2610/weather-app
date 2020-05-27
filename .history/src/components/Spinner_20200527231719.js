import React, { Component } from "react";
let Spinner = require("react-spinkit");
export default class MySpinner extends Component {
  render() {
    return (
      <div className="spinner">
        <Spinner name="ball-pulse-rise" color="orange" fadeIn="half" />
      </div>
    );
  }
}
