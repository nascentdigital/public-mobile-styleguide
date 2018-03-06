import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../colorcode'
import media from '../../mediaQueries'

// A link to another page, styled as a button

const ButtonLinkPrimary = props => {
  const Link = styled.a`
    text-align: center;
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
  const { url, text } = props
  return <Link href={url}>{text}</Link>
}

ButtonLinkPrimary.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ButtonLinkPrimary
