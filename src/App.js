import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dot from './components/Dot';
import MainPage from './pages/MainPage';
import Skills from './pages/Skills';
import NotFound404 from './pages/NotFound404';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header"> {/* eslint-disable-next-line */}
                    <h1 id="header-text">{headText}</h1>
                    <div className="intro-wrapper App-hidden animating">
                        <div className="nav-wrapper">
                            <div className="dots-wrapper"><Dot color="#FC6058" /><Dot color="#FEC02F" /><Dot color="#2ACA3E" /></div>
                        </div>
                        <div className="content-wrapper">
                            <Switch>
                                <Route path="/" exact render={() => <MainPage text={{ devText, contText }} />} />
                                <Route path="/skills" component={Skills} />
                                <Route component={NotFound404} />
                            </Switch>
                        </div>
                    </div>
                </header>
            </div>
        </Router>
    );
}

const headText = "Hi, I'm Nadhir.";
const devText = "I'm a Developer";
const contText = "I make stuf bla bla bla idk i use a lot of things idk how to express myself haha lol sorry. Lorem ipsum that latin thing idk haha filler goes brrrrr";

export default App;