import styled from 'styled-components'
import colors from '../../../colorcode'
import media from '../../../mediaQueries'

const ButtonLinkSecondary = styled.a`
  text-align: center;
  border-radius: 8px;
  background-color: ${colors.greydark};
  color: ${colors.white};
  padding: 13px;
  font-family: Open Sans, sans-serif;
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

  ${media.tabletAndUp`
      width: 50%;
    `};
`

export default ButtonLinkSecondary
