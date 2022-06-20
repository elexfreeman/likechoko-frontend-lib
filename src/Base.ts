import styled from 'styled-components';
import * as Color from './Color';

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 100%; 
  @media (min-width: 1024px) {
    width: 1024px;
  } 
`;

export const Title = styled.div`
  color: ${Color.textBase};
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${Color.borderBase}; 
`;
