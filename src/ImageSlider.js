// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
  constructor(props) {
  super(props)
  // ...define initial state with a key of 'color' set to the 'value' prop
  this.state = {
    currentSlideIndex : 0
  }
  }


  render() {
    return (
      <div>I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }

}
