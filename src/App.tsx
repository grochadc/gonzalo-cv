import React from 'react';
import './App.css';

import TechnologiesComponent from './sections/TechnologiesComponent';
import ProjectsSection from "./sections/ProjectsSection";
import {About, Header} from "./sections/AboutSection";
import ContactFooter from "./sections/ContactFooter";

import {Helmet} from "react-helmet";
import ExtraSection from './sections/ExtraSection';

import locale from "./locale";

function App() {
  return (
    <div>
      <Helmet>
        <title>Gonzalo Rocha CV</title>
      </Helmet>
      {/*<AboutAndHeader />*/}
      <Header />
      <div className='pattern'>
      <About />
      <TechnologiesComponent />
      <ProjectsSection />
      <ExtraSection />
      <p className='mb-3 text w-full flex justify-center'>{locale.getString("footer.app")} <a className="underline ml-1" href="https://gonzalorocha.com.mx" rel="noreferrer" target="_blank">https://gonzalorocha.com.mx</a></p>
      <p className="mb-3 w-full flex justify-center">({locale.getString("footer.sourcecode")} <a className="underline ml-1" href="https://github.com/grochadc/gonzalo-cv" target="_blank" rel="noreferrer">{locale.getString("footer.here")}</a>).</p>
      </div>
      <ContactFooter />
    </div>
  );
}

export default App;
