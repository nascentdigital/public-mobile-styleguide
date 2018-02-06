import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../../../../utils/colors'
import media from '../../../../utils/mediaQueries'

const ButtonSecondaryLight = props => {
  const Link = styled.button`
    text-align: center;
    border-radius: 8px;
    background-color: ${colors.white};
    color: ${colors.greydark};
    padding: 13px;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
    display: table-cell;
    border-radius: 8px;
    border: solid 3px ${colors.greydark};

    &:hover {
      background-color: ${colors.greylight};
      color: ${colors.white};
      border: solid 3px ${colors.greylight};
      border-radius: 8px;
      cursor: pointer;
    }

    &:active {
      background-color: ${colors.greydark};
      border-radius: 8px;
      border: solid 3px ${colors.greydark};
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

ButtonSecondaryLight.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ButtonSecondaryLight
