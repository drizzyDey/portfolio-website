import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './App.css'


const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;