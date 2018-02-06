import React from 'react';
import styled from 'styled-components';

const Box = (props) => {

  const Header = styled.h2`
    font-family: "Open Sans", sans-serif;
  `

  const Boxes = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  const Container = styled.div`
    padding: 20px;
  `

  const colorList = props.colors.map((color, i) => {
    const ColorBox = styled.div`
      background: ${color.color};
      width: 100px;
      height: 100px;
    `

    return (
      <Container key={i}>
      <Header>{color.name}</Header>
        <p> {color.color} </p>
        <ColorBox />
      </Container>
    )
  })

  return (
    <Boxes>
      {colorList}
    </Boxes>
  )


}


export default Box;
