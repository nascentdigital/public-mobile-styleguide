import React from 'react'
import styled from 'styled-components'
import colors from '../../colorcode'
import media from '../../mediaQueries'

// A link to another page, styled as a button

const ButtonLinkPrimary = props => {
  const Link = styled.a`
    text-align: center;
    font-family: Open Sans, sans-serif;
    border-radius: 8px;
    background-color: ${colors.orangemedium};
    color: ${colors.white};
    padding: 13px;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colors.orangelight};
    }

    &:active {
      background-color: ${colors.orangedark};
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


export default ButtonLinkPrimary
