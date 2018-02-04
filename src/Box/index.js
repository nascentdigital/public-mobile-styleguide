import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Box = (props) => {

  const Header = styled.h2`
    font-family: "Open Sans", sans-serif;
  `


  const colorList = props.colors.map((color) => {
    const ColorBox = styled.div`
      background: ${color.color};
      width: 100px;
      height: 100px;
    `
    return (
      <div>
      <Header>{color.name}</Header>
        <ColorBox />
      </div>
    )
  })

  return (
    <div>
      {colorList}
    </div>
  )


}


export default Box;
