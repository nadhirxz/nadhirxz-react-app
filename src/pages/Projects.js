import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default class Projects extends Component {
    render() {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={this.props.pageVariants} transition={this.props.pageTransition}>
                <h1>PROJECTS PAGE</h1>
                <Link to="/"><button className="btn" style={{ width: '10%' }}>Back</button></Link>
            </motion.div>
        )
    }
}