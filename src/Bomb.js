import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props)

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    decrement = () => {
        this.setState({
            secondsLeft: this.state.secondsLeft -1
        });
        setTimeout(this.decrement, 1000)
    }
    
    

    render() {
        return (
            <div onClick={this.decrement} >
                {this.state.secondsLeft === 0 ? "Boom!" : <p>{this.state.secondsLeft} seconds left before I go boom!</p>}
            </div>
        )
    }


}


export default Bomb;
