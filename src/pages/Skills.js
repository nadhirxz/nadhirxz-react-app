import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>SKILLS PAGE</h1>
                <Link to="/"><button className="btn">Back</button></Link>
            </React.Fragment>
        )
    }
}
