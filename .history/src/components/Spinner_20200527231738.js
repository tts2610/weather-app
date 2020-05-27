import React, { Component } from "react";
let Spinner = require("react-spinkit");
export default class MySpinner extends Component {
  state = {
    showSpinner: false,
  };
  componentDidMount() {
    this.timer = setTimeout(
      () => this.setState({ showSpinner: true }),
      this.props.delay
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <div className="spinner">
        <Spinner name="ball-pulse-rise" color="orange" fadeIn="half" />
      </div>
    );
  }
}
