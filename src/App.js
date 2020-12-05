import './App.css';
import Dot from './components/Dot';
import {ReactComponent as JS} from './components/icons/js.svg';
import {ReactComponent as HTML} from './components/icons/html.svg';
import {ReactComponent as CSS} from './components/icons/css.svg';
import {ReactComponent as MYSQL} from './components/icons/mysql.svg';
import {ReactComponent as PYTHON} from './components/icons/python.svg';
import {ReactComponent as JAVA} from './components/icons/java.svg';
import {ReactComponent as C_LANG} from './components/icons/c.svg';
import {ReactComponent as NODEJS} from './components/icons/nodejs.svg';
import {ReactComponent as EXPRESS} from './components/icons/express.svg';
import {ReactComponent as MONGODB} from './components/icons/mongodb.svg';
import {ReactComponent as JQUERY} from './components/icons/jquery.svg';
import {ReactComponent as BOOTSTRAP} from './components/icons/bootstrap.svg';
import {ReactComponent as REACT} from './components/icons/react.svg';
import {ReactComponent as GIT} from './components/icons/git.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1 id="header-text">-</h1>
            <div className="App-hidden">
                <div className="intro-wrapper">
                    <div className="nav-wrapper">
                        <div className="dots-wrapper"><Dot color="#FC6058" /><Dot color="#FEC02F" /><Dot color="#2ACA3E" /></div>
                    </div>
                    <div className="left-column">
                        <h1>I'm a Developer</h1>
                        <p>I make stuf bla bla bla idk i use a lot of things idk how to express myself haha lol sorry.<br/>Lorem ipsum that latin thing idk haha filler goes brrrrr</p>
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
                        <EXPRESS style={{fill:"#fff"}} width={iconSize} height={iconSize} title="Express.js" />
                        <MONGODB width={iconSize} height={iconSize} title="MongoDB" />
                        <JQUERY width={iconSize} height={iconSize} title="jQuery" />
                        <BOOTSTRAP width={iconSize} height={iconSize} title="Bootstrap" />
                        <REACT width={iconSize} height={iconSize} title="React" />
                        <GIT width={iconSize} height={iconSize} title="Git" />
                    </div>
                </div>
            </div>
      </header>
    </div>
  );
}

const iconSize = "50px";

export default App;