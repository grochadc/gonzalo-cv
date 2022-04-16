import React from 'react';
import './App.css';

import TechnologiesComponent from './sections/TechnologiesComponent';
import ProjectsSection from "./sections/ProjectsSection";
import AboutAndHeader from "./sections/AboutSection";
import ContactFooter from "./sections/ContactFooter";

import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Gonzalo Rocha CV</title>
      </Helmet>
      <AboutAndHeader />
      <TechnologiesComponent />
      <ProjectsSection />
      <p className='mb-3 text w-full flex justify-center'>Para ver el codigo fuente de esta pagina click <a className="underline ml-1" href="https://github.com/grochadc/gonzo-cv" target="_blank" rel="noreferrer">aquí.</a></p>
      <ContactFooter />
    </div>
  );
}

export default App;
