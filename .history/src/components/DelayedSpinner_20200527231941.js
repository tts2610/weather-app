import React, { Component } from "react";
import MySpinner from "./components/Spinner";

export default class DelayedSpinner extends Component {
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
    return this.state.showSpinner && <MySpinner />;
  }
}
