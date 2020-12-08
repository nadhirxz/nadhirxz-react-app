import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import { printingChars } from '../functions.js'

export default class Skills extends Component {
    componentDidMount() {
        printingChars()
    }
    render() {
        const skills = [
            { name: 'JavaScript', l: 90 },
            { name: 'HTML/CSS', l: 85 },
            { name: 'Bootstrap', l: 65 },
            { name: 'jQuery', l: 40 },
            { name: 'React', l: 20 },
            { name: 'Git/GitHub', l: 60 },
            { name: 'Web Back-end', l: 80, eg: 'Node/Express' },
            { name: 'Databases', l: 55, eg: 'SQL/MongoDB' },
            { name: 'Python', l: 60 },
            { name: 'OOP', l: 50, eg: 'Java' },
            { name: 'C', l: 40 }
        ]
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={this.props.pageVariants} transition={this.props.pageTransition}>
                <h1>My Skills</h1>
                <div className="main-content">
                    <div className="left-column">
                        {skills.slice(0, 6).map((i) => (
                            <ProgressBar name={i.name} key={i.name} limit={i.l} eg={i.eg} />
                        ))}
                    </div>
                    <div className="right-column">
                        {skills.slice(6).map((i) => (
                            <ProgressBar name={i.name} key={i.name} limit={i.l} eg={i.eg} />
                        ))}
                    </div>
                </div>
                <Link to="/"><button className="btn" style={{ width: '10%' }}>Back</button></Link>
            </motion.div>
        )
    }
}