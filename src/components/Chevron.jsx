import React from 'react'
import styled from 'styled-components'
import media from '../mediaQueries'

const Chevron = () => {
  const ChevronWrap = styled.svg`
    height: 12px;
    width: 20px;
    margin-top: 2px;
    ${media.tabletAndUp`
      height: 18px;
      width: 30px;
    `};
  `
  return (
    <ChevronWrap
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 20"
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#018096"
        strokeWidth="3"
        d="M2 19l8-9-8-9"
      />
    </ChevronWrap>
  )
}

export default Chevron
