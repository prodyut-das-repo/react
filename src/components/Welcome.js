import React, { Component } from 'react';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}