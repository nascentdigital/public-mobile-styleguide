import styled from 'styled-components'
import colors from '../../../colorcode'
import media from '../../../mediaQueries'

const ButtonPrimary = styled.button`
  text-align: center;
  border-radius: 8px;
  background-color: ${colors.orangemedium};
  color: ${colors.white};
  padding: 13px;
  font-family: Open Sans, sans-serif;
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

  ${media.tabletAndUp`
      width: 50%;
      max-width: 261px;
    `};
`

export default ButtonPrimary
