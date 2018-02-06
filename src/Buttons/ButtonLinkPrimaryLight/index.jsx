import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const ButtonLinkPrimaryLight = props => {
  const Link = styled.a`
    text-align: center;
    border-radius: 8px;
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

    ${media.mobile`
      display:block;
    `} ${media.tabletAndUp`
      width: 50%;
      min-width: 261px;
    `};
  `
  return <Link href="/"> Button</Link>
}

export default ButtonLinkPrimaryLight
