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
import { ReactComponent as GIT } from '../components/icons/git.svg';

export default class MainPage extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="left-column"> {/* eslint-disable-next-line */}
                    <h1 id="title-text">{this.props.text.devText}</h1> {/* eslint-disable-next-line */}
                    <p id="content-text">{this.props.text.contText}</p>
                </div>
                <div className="right-column">
                    <h4>Languages</h4>
                    <JS width={iconSize} height={iconSize} title="JavaScript" />
                    <HTML width={iconSize} height={iconSize} title="HTML5" />
                    <CSS width={iconSize} height={iconSize} title="CSS3" />
                    <MYSQL width={iconSize} height={iconSize} title="MySQL" />
                    <PYTHON width={iconSize} height={iconSize} title="Python" />
                    <JAVA width={iconSize} height={iconSize} title="Java" />
                    <C_LANG width={iconSize} height={iconSize} title="C" />

                    <h4>Libraries / Tools</h4>
                    <NODEJS width={iconSize} height={iconSize} title="Node.js" />
                    <EXPRESS style={{ fill: "#fff" }} width={iconSize} height={iconSize} title="Express.js" />
                    <MONGODB width={iconSize} height={iconSize} title="MongoDB" />
                    <JQUERY width={iconSize} height={iconSize} title="jQuery" />
                    <BOOTSTRAP width={iconSize} height={iconSize} title="Bootstrap" />
                    <REACT width={iconSize} height={iconSize} title="React" />
                    <GIT width={iconSize} height={iconSize} title="Git" />

                    <Link to="/skills"><button className="btn">Skills</button></Link>
                </div>
            </div>
        )
    }
}
const iconSize = "50px";