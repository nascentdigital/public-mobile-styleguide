import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import colors from '../colorcode'
import media from '../mediaQueries'

// A link to another page, styled as a button

 const ButtonType = styled.a`
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
  display:block;

  &:hover {
    background-color: ${colors.orangelight};
  }

  &:active {
    background-color: ${colors.orangedark};
  }

${media.tabletAndUp`
    width: 25%;
    min-width: 261px;
  `};
`

const ButtonLinkPrimary = ({children}) => {
  return (
    <ButtonType> {children} </ButtonType>
  )
}

ButtonLinkPrimary.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ButtonLinkPrimary
