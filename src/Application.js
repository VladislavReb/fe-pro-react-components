import React from 'react';
import { Header } from './components/Header/Header.js';
import { Content } from './components/Content/Content.js';
import { Footer } from './components/Footer/Footer.js';

const Application = () => {
  return (
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
  );
};

export default Application;
