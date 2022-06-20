import React from "react";
import styled from 'styled-components';

import * as Color from './Color';

export const ButtonWraper = styled.div`
  color: ${Color.textLink};
  font-size: 16px;
  border: 1px solid ${Color.borderBase};
  display: inline-block;
  padding: 4px 20px;
  cursor: pointer;
  min-width: 95px;
  text-align: center;
  &:hover {
    background: ${Color.bgHover};
  }
`;

const Button = (props: {children?: React.ReactNode;}): JSX.Element => (
  <ButtonWraper>
    {props.children}
  </ButtonWraper>
);

export default Button;
