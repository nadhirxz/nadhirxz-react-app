import React, { useEffect } from 'react'
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Dot from './components/Dot';
import Home from './pages/Home';
import Skills from './pages/Skills';
import NotFound404 from './pages/NotFound404';
import Projects from './pages/Projects';
import { printLetterByLetter, hideIcons, hideSocialIcons, showIcons, showSocialIcons } from './functions.js';

function App() {
    const location = useLocation();
    const mainPath = '/';

    useEffect(() => { // when the page loads
        const introWrapper = document.getElementsByClassName('intro-wrapper')[0];

        const headerText = document.getElementById('header-text');

        if (location.pathname === mainPath && headerText) {
            hideIcons();
            hideSocialIcons();
            
            const languagesText = document.getElementById('languages');
            languagesText.innerHTML = '';

            const librariestooldText = document.getElementById('tools');
            librariestooldText.innerHTML = '';

            const skillsLink = document.getElementById('skills-link');
            skillsLink.className = 'hidden';

            const projectsLink = document.getElementById('projects-link');
            projectsLink.className = 'hidden';

            printLetterByLetter(headerText, headText, 100).then(() => {
                setTimeout(() => {
                    headerText.style.transform = 'translateY(-800%)';
                    setTimeout(() => {
                        headerText.style.opacity = 0;
                        introWrapper.style.opacity = 1;

                        headerText.parentNode.removeChild(headerText);

                        printLetterByLetter(languagesText, langText, 100).then(() => {
                            showIcons(0, 7);
                        });
                        printLetterByLetter(librariestooldText, toolsText, 100).then(() => {
                            showIcons(7, 14);
                        });

                        const titleText = document.getElementById('title-text');
                        titleText.innerHTML = "";

                        const contentText = document.getElementById('content-text');
                        contentText.innerHTML = "";


                        printLetterByLetter(document.getElementById('title-text'), helloText, 100);
                        printLetterByLetter(document.getElementById('content-text'), contText, 50).then(() => {
                            skillsLink.style.opacity = 1;
                            projectsLink.style.opacity = 1;
                            showSocialIcons();
                        });
                    }, 400);
                }, 700);
            });
        } else {
            if (headerText) headerText.parentNode.removeChild(headerText);
            if (introWrapper) introWrapper.style.opacity = 1;
        }
    }, [location])
    return (
        <div className="App">
            <header className="App-header"> {/* eslint-disable-next-line */}
                <h1 id="header-text"></h1>
                <AnimatePresence>
                    <div className="intro-wrapper hidden">
                        <div className="nav-wrapper">
                            <div className="dots-wrapper"><Dot color="#FC6058" /><Dot color="#FEC02F" /><Dot color="#2ACA3E" /></div>
                        </div>
                        <div className="content-wrapper">
                            <Switch location={location} key={location.pathname}>
                                <Route path={mainPath} exact render={() => <Home pageVariants={pageVariants} pageTransition={pageTransition} helloText={helloText} contText={contText} langText={langText} toolsText={toolsText} />} />
                                <Route path="/skills" render={() => <Skills pageVariants={pageVariants} pageTransition={pageTransition} mainPath={mainPath} />} />
                                <Route path="/projects" render={() => <Projects pageVariants={pageVariants} pageTransition={pageTransition} mainPath={mainPath} />} />
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
const helloText = "Hello there !";
const contText = "I'm a fullstack web developer."
// const contText = "I make stuf bla bla bla idk i use a lot of things idk how to express myself haha lol sorry. Lorem ipsum that latin thing idk haha filler goes brrrrr";

const langText = "Languages";
const toolsText = "Libraries / Tools";

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