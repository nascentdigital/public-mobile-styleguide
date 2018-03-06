import React from 'react'
import styled from 'styled-components'
import colors from '../../../colorcode'
import media from '../../../mediaQueries'

const ButtonLinkPrimaryLight = props => {
  const Link = styled.a`
    text-align: center;
    border-radius: 8px;
    font-family: Open Sans, sans-serif;
    background-color: ${colors.white};
    color: ${colors.orangemedium};
    padding: 13px;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    display: table-cell;
    border-radius: 8px;
    border: solid 3px ${colors.orangemedium};
    display:block;

    &:hover {
      background-color: ${colors.orangelight};
      color: ${colors.white};
      cursor: pointer;
    }

    &:active {
      background-color: ${colors.orangedark};
      border-radius: 8px;
      border: solid 3px ${colors.orangedark};
    }

    ${media.tabletAndUp`
      width: 25%;
      min-width: 261px;
    `};
  `
  return <Link href="/"> Button</Link>
}

export default ButtonLinkPrimaryLight
