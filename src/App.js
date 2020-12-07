import React from 'react'
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Dot from './components/Dot';
import Home from './pages/Home';
import Skills from './pages/Skills';
import NotFound404 from './pages/NotFound404';
import Projects from './pages/Projects';

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <header className="App-header"> {/* eslint-disable-next-line */}
                <h1 id="header-text">{headText}</h1>
                <AnimatePresence>
                    <div className="intro-wrapper App-hidden">
                        <div className="nav-wrapper">
                            <div className="dots-wrapper"><Dot color="#FC6058" /><Dot color="#FEC02F" /><Dot color="#2ACA3E" /></div>
                        </div>
                        <div className="content-wrapper">
                            <Switch location={location} key={location.pathname}>
                                <Route path="/" exact render={() => <Home pageVariants={pageVariants} pageTransition={pageTransition} devText={devText} contText={contText} />} />
                                <Route path="/skills" render={() => <Skills pageVariants={pageVariants} pageTransition={pageTransition} />} />
                                <Route path="/projects" render={() => <Projects pageVariants={pageVariants} pageTransition={pageTransition} />} />
                                <Route component={NotFound404} />
                            </Switch>
                        </div>
                    </div>
                </AnimatePresence>
            </header>
        </div>
    );
}

const headText = "Hi, I'm Nadhir.";
const devText = "I'm a Developer";
const contText = "I make stuf bla bla bla idk i use a lot of things idk how to express myself haha lol sorry. Lorem ipsum that latin thing idk haha filler goes brrrrr";

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
};
const pageTransition = {
    type: "fade",
    duration: .5
};

export default App;