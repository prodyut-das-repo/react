import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log('Modified value', this.state.counter);
        });
        console.log('value', this.state.counter);

    }
    render() {
        return (
            <div>
                Counter - {this.state.counter}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
