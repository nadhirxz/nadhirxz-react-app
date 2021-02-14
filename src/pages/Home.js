import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as JS } from '../components/icons/js.svg';
import { ReactComponent as HTML } from '../components/icons/html.svg';
import { ReactComponent as CSS } from '../components/icons/css.svg';
import { ReactComponent as MYSQL } from '../components/icons/mysql.svg';
import { ReactComponent as PYTHON } from '../components/icons/python.svg';
import { ReactComponent as JAVA } from '../components/icons/java.svg';
import { ReactComponent as C_LANG } from '../components/icons/c.svg';
import { ReactComponent as NODEJS } from '../components/icons/nodejs.svg';
import { ReactComponent as EXPRESS } from '../components/icons/express.svg';
import { ReactComponent as MONGODB } from '../components/icons/mongodb.svg';
import { ReactComponent as JQUERY } from '../components/icons/jquery.svg';
import { ReactComponent as BOOTSTRAP } from '../components/icons/bootstrap.svg';
import { ReactComponent as REACT } from '../components/icons/react.svg';
import { ReactComponent as ELECTRON } from '../components/icons/electron.svg';
import { ReactComponent as GITHUB } from '../components/icons/github.svg';
import { ReactComponent as EMAIL } from '../components/icons/email.svg';
import { ReactComponent as DISCORD } from '../components/icons/discord.svg';
import { motion } from 'framer-motion';

export default class Home extends Component {
    render() {
        return (
            <motion.div initial="initial" animate="in" exit="out" variants={this.props.pageVariants} transition={this.props.pageTransition}>
                <div className="main-content">
                    <div className="left-column" style={{ margin: 'auto' }}> {/* eslint-disable-next-line */}
                        <h1 id="title-text">{this.props.helloText}</h1> {/* eslint-disable-next-line */}
                        <p id="content-text">{this.props.contText}</p>
                        <a href="https://github.com/nadhirxz" target="_blank" id="github"><GITHUB className="svg-link" width={style.width} height={style.height} title="Github" /></a>
                        <a href="mailto:nadhir02@gmail.com" target="_blank" id="email"><EMAIL className="svg-link" width={style.width} height={style.height} title="Email" /></a>
                        <a href="https://discord.com/users/626920219759083528" target="_blank" id="discord"><DISCORD className="svg-link" width={style.width} height={style.height} title="Discord" /></a>
                    </div>
                    <div className="right-column">
                        <h4 id='languages'>{this.props.langText}</h4>
                        <JS style={style} title="JavaScript" />
                        <HTML style={style} title="HTML5" />
                        <CSS style={style} title="CSS3" />
                        <MYSQL style={style} title="MySQL" />
                        <PYTHON style={style} title="Python" />
                        <JAVA style={style} title="Java" />
                        <C_LANG style={style} title="C" />
                        <h4 id='tools'>{this.props.toolsText}</h4>
                        <NODEJS style={style} title="Node.js" />
                        <EXPRESS style={style} title="Express.js" />
                        <MONGODB style={style} title="MongoDB" />
                        <JQUERY style={style} title="jQuery" />
                        <BOOTSTRAP style={style} title="Bootstrap" />
                        <REACT style={style} title="React" />
                        <ELECTRON style={style} title="Electron" />

                        <br />
                        <Link id="skills-link" to="/skills"><button className="btn" style={{ width: '40%' }}>Skills</button></Link>
                        <br />
                        <Link id="projects-link" to="/projects"><button className="btn" style={{ width: '40%' }}>Projects</button></Link>
                    </div>
                </div>
            </motion.div>
        )
    }
}
const style = {
    width: '50px',
    height: '50px',
    transition: 'opacity 2s'
}