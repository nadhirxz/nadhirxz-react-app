import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NotFound404 extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>OOPS! Nothing here ..</h1>
                <Link to="/"><button className="btn">Home</button></Link>
            </React.Fragment>
        )
    }
}
