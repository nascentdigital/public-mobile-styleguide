import React from 'react'
import styled from 'styled-components'
import colors from '../../../colorcode'
import media from '../../../mediaQueries'
const ButtonPrimary = props => {
  const Link = styled.button`
    text-align: center;
    border-radius: 8px;
    background-color: ${colors.orangemedium};
    color: ${colors.white};
    padding: 13px;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    display: table-cell;

    &:hover {
      background-color: ${colors.orangelight};
      cursor: pointer;
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

export default ButtonPrimary
