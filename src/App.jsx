import React, { Component } from 'react';
// import FaHome from 'react-icons/fa/home';
import CloudWrapper from './components/CloudWrapper.styled';
import Header from './Header';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <CloudWrapper>
          <Portfolio />
          <Contact />
          <AboutMe />
        </CloudWrapper>
        <Hero />
      </div>
    );
  }
}

export default App;
