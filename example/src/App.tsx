import React from 'react';
// https://prateeksurana.me/blog/react-library-with-typescript/
import logo from './logo.svg';
import './App.css';

import {SayHello, Base} from 'aa-lib';



function App() {
  return (
    <Base.Container>
      <Base.Title>Заголовок</Base.Title>
    </Base.Container>
  );
}

export default App;
