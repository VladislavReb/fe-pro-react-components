import React from 'react';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';

export const Application = () => {
  return (
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
  );
};