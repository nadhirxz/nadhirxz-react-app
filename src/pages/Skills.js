import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import { printingChars, printLetterByLetter, titleInterval } from '../functions.js';

const title = 'My Skills';

export default class Skills extends Component {
    componentDidMount() {
        printLetterByLetter(document.getElementById('title'), title, titleInterval);
        printingChars()
    }
    render() {
        const skills = [
            { name: 'JavaScript', l: 90 },
            { name: 'HTML/CSS', l: 80 },
            { name: 'Bootstrap', l: 65 },
            { name: 'jQuery', l: 50 },
            { name: 'React', l: 40 },
            { name: 'Electron', l: 35 },
            { name: 'Web Back-end', l: 80, eg: 'Node/Express' },
            { name: 'Databases', l: 50, eg: 'SQL/MongoDB' },
            { name: 'Python', l: 55 },
            { name: 'OOP', l: 45, eg: 'Java' },
            { name: 'C', l: 35 }
        ]
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={this.props.pageVariants} transition={this.props.pageTransition}>
                {/* eslint-disable-next-line */}
                <h1 id='title'></h1>
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
                <Link to={this.props.mainPath}><button className="btn" style={{ width: '10%' }}>Back</button></Link>
            </motion.div>
        )
    }
}