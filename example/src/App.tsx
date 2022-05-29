import React from 'react';
// https://prateeksurana.me/blog/react-library-with-typescript/
import logo from './logo.svg';
import './App.css';

import {SayHello} from 'aa-lib';

//import styled from 'styled-components';
//
//const Title = styled.h1`
//  font-size: 1.5em;
//  text-align: center;
//  color: palevioletred;
//`;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SayHello name="123123" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
