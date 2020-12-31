import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'cool'
        }
    }
    clickHandler = () => {
        this.setState({
            message: 'Clicked'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button className="btn btn-success" onClick={this.clickHandler.bind(this)}>Click</button> */}
                <button className="btn btn-success" onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default EventBind
