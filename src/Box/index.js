import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Box = (props) => {

  const Header = styled.h2`
    font-family: "Open Sans", sans-serif;
  `

  const ColorBox = styled.div`
    background: ${props.colors.color};
    width: 100px;
  	height: 100px;
  `

    return (
      <div>
      <Header>{props.colors.name}</Header>
        <ColorBox />
      </div>
    )
}


export default Box;
