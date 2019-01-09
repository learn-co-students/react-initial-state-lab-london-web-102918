// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
  render() {
    return this.props.initialCount === 0 ? (
      <div>Boom!</div>
    ) : (
      <div>{this.props.initialCount} seconds left before I go boom!</div>
    );
  }
}
