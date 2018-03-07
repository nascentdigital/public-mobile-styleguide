import React from 'react'
import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'


 const CircleLTE = () => {
  const CircleWrap = styled.svg`
    width: 40px;
    height: 40px;

    ${media.desktop`
      width: 60px;
      height: 60px;
    `}
  `
  const Circle = styled.circle`
    fill: ${colors.bluedark};
    cx: 20;
    cy: 20;
    r: 20;

    ${media.desktop`
      cx: 30;
      cy: 30;
      r: 30;
    `}
  `
  const Text = styled.text`
    fill: ${colors.white};
    font-weight: 600;
    font-family: Open Sans, sans-serif;
    ${fontSize(16)}

    ${media.desktop`
      ${fontSize(24)}
    `}
  `
  return (
    <CircleWrap>
      <Circle />
      <Text x="17%" y="65%">
        LTE
      </Text>
    </CircleWrap>
  )
}

export default CircleLTE
