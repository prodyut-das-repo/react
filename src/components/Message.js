import React, { Component } from 'react';

export default class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome User',
            button: 'Subscribe',
            disabled: false,
            className: 'btn btn-danger'
        }
    }
    changeEvent() {
        this.setState({
            message: 'Thanks for subscribing',
            button: 'Subscribed',
            disabled: true,
            className: "btn btn-info"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button className={this.state.className} disabled={this.state.disabled} onClick={() => this.changeEvent()}>{this.state.button}</button>
            </div>
        )
    }
}