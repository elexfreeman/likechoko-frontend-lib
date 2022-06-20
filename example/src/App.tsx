import React from 'react';
// https://prateeksurana.me/blog/react-library-with-typescript/
import logo from './logo.svg';
import './App.css';

import {SayHello, Base, Button} from 'aa-lib';



function App() {
  return (
    <Base.Container>
      <Base.Title>Заголовок</Base.Title>
      <br/>
      <br/>
      <br/>
      <Button>Кнопка</Button>
    </Base.Container>
  );
}

export default App;
