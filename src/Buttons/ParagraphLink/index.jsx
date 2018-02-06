import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const ParagraphLink = props => {
  const Link = styled.a`
    align-items: center;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    color: ${colors.tealdark};
    font-weight: 400;
    font-size: 20px;

    &:hover {
      color: ${colors.teallight};
      cursor: pointer;
    }

    &:active {
      color: ${colors.tealmedium};
    }

    ${media.mobile`
      display:block;
    `} ${media.tabletAndUp`
      width: 50%;
      min-width: 261px;
    `};
  `

  return <Link href="/"> Button</Link>
}

export default ParagraphLink
