import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import logo from './logo.svg';

import Wrapper from './App.styled';
import { Header, Logo } from './Header.styled';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} />
        </Header>
        {/*<Components />*/}
      </Wrapper>
    );
  }
}

export default App;
