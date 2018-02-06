import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const ButtonLinkSecondary = props => {
  const Link = styled.a`
    text-align: center;
    border-radius: 8px;
    background-color: ${colors.greydark};
    color: ${colors.white};
    padding: 13px;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    display: table-cell;

    &:hover {
      background-color: ${colors.greylight};
      cursor: pointer;
    }

    &:active {
      background-color: ${colors.greydark};
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


export default ButtonLinkSecondary
