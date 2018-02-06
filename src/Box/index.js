import React from 'react';
import styled from 'styled-components';

const Box = (props) => {

  const Header = styled.h2`
    font-family: "Open Sans", sans-serif;
  `


  const colorList = props.colors.map((color, i) => {
    const ColorBox = styled.div`
      background: ${color.color};
      width: 100px;
      height: 100px;
    `
    return (
      <div key={i}>
      <Header>{color.name}</Header>
        <p> {color.color} </p>
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
