import React from "react";
import './style.css';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div className="aa-class aa-sass">
    <Title>Styled ttitle</Title>
  <div>Hey {name}, say hello to TypeScript.</div> 
  </div>
);

export default SayHello;
