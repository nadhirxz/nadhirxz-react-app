import React, { Component } from 'react'

export default class Dot extends Component {
    render() {
        return (<div className="dot" style={{backgroundColor: this.props.color}}></div>)
    }
}