import styled from 'styled-components'
import media from '../../../mediaQueries'
import colors from '../../../colorcode'

// A link to another page, styled as a button

const ButtonLinkPrimary = styled.a`
  text-align: center;
  border-radius: 8px;
  font-family: Open Sans, sans-serif;
  background-color: ${colors.orangemedium};
  color: ${colors.white};
  padding: 13px;
  font-weight: 400;
  display: table-cell;
  text-decoration: none;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.orangelight};
  }

  &:active {
    background-color: ${colors.orangedark};
  }

  ${media.tabletAndUp`
      width: 50%;
    `};
`

export default ButtonLinkPrimary
