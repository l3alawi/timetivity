import React from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/Header/Header';

const LifeNodes = () => {

  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
      background: palevioletred;
      color: white;
    `}
  `;

  return(
    <div>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
      <Header />
    </div>
  )
}

export default LifeNodes;
