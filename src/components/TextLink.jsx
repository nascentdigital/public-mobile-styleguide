import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../colors'
import media from '../mediaQueries'
import fontSize from '../fontSize'
import Chevron from './Chevron'

const TextLink = props => {
  const Link = styled.a`
    align-items: center;
    font-family: Open Sans, sans-serif;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    color: ${colors.tealdark};
    font-weight: 400;
    ${fontSize(16)}
    text-decoration: none;

    &:hover {
      color: ${colors.teallight};
      cursor: pointer;
    }

    &:active {
      color: ${colors.tealmedium};
    }

    ${media.tabletAndUp`
      ${fontSize(18)}
    `};
  `

  const { url, text, className } = props
  return (
    <Link className={className} href={url}>
      {text}
      <Chevron />
    </Link>
  )
}

TextLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

TextLink.defaultProps = {
  className: ''
}

export default TextLink
