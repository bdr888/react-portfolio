import React, { Component } from 'react';
// import FaHome from 'react-icons/fa/home';
import logo from './logo.svg';
import Wrapper from './App.styled';
import Header from './Header';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Card />
      </Wrapper>
    );
  }
}

export default App;
