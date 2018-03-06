import React from 'react'
import styled from 'styled-components'
import colors from '../../../colorcode'
import media from '../../../mediaQueries'

const Chevron = styled.span`
  display: inline-flex;
  &:before {
    top: 0;
    color: ${colors.tealdark};
    border-style: solid;
    border-width: 0.2em 0.2em 0 0;
    content: '';
    display: inline-block;
    height: 0.75em;
    left: 0.5em;
    position: relative;
    transform: rotate(45deg);
    vertical-align: top;
    width: 0.75em;
  }
  &:hover {
    color: ${colors.teallight};
    cursor: pointer;
  }

  ${media.mobile`padding-top:5px;`} ${media.tablet`padding-top:5px;`};
`

const TextLink = props => {
  const Link = styled.a`
    align-items: center;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    color: ${colors.tealdark};
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;

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

  return (
    <Link href="/">
      Button
      <Chevron />
    </Link>
  )
}

export default TextLink
