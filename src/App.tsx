import React from 'react';
import './App.css';

import TechnologiesComponent from './sections/TechnologiesComponent';
import ProjectsSection from "./sections/ProjectsSection";
import AboutAndHeader from "./sections/AboutSection";
import ContactFooter from "./sections/ContactFooter";

import {Helmet} from "react-helmet";
import ExtraSection from './sections/ExtraSection';

function App() {
  return (
    <div>
      <Helmet>
        <title>Gonzalo Rocha CV</title>
      </Helmet>
      <AboutAndHeader />
      <TechnologiesComponent />
      <ProjectsSection />
      <ExtraSection />
      <p className='mb-3 text w-full flex justify-center'>Para ver el CV como una App de React visita: <a className="underline ml-1" href="https://gonzalorocha.com.mx" rel="noreferrer" target="_blank">https://gonzalorocha.com.mx</a></p>
      <p className="mb-3 w-full flex justify-center">(Codigo fuente <a className="underline ml-1" href="https://github.com/grochadc/gonzalo-cv" target="_blank" rel="noreferrer">aquí</a>).</p>
      <ContactFooter />
    </div>
  );
}

export default App;
