import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';

export default class Skills extends Component {
    render() {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={this.props.pageVariants} transition={this.props.pageTransition}>
                <h1>My Skills</h1>
                <div className="main-content">
                    <div className="left-column">
                        <ProgressBar name='JavaScript' limit={90} />
                        <ProgressBar name='HTML/CSS' limit={85} />
                        <ProgressBar name='Bootstrap' limit={65} />
                        <ProgressBar name='jQuery' limit={40} />
                        <ProgressBar name='React' limit={20} />
                        <ProgressBar name='Git/GitHub' limit={60} />
                    </div>
                    <div className="right-column">
                        <ProgressBar name='JS Back-end' eg='Node/Express' limit={80} />
                        <ProgressBar name='Databases' eg='SQL/Mongo' limit={55} />
                        <ProgressBar name='Python' limit={60} />
                        <ProgressBar name='OOP' eg='Java' limit={50} />
                        <ProgressBar name='C' limit={40} />
                    </div>
                </div>
                <Link to="/"><button className="btn" style={{ width: '10%' }}>Back</button></Link>
            </motion.div>
        )
    }
}