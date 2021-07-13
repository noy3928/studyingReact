import React, { Component } from 'react'

export class MyComponent extends Component {
    render() {
           const name = this.props.name;
            return <span>{name}</span>

    }
}

export default MyComponent
