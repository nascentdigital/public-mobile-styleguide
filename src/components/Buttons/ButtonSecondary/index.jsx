import styled from 'styled-components'
import colors from '../../../colorcode'
import media from '../../../mediaQueries'

  const ButtonSecondary = styled.button`
    text-align: center;
    border-radius: 8px;
    font-family: Open Sans, sans-serif;
    background-color: ${colors.greydark};
    color: ${colors.white};
    padding: 13px;
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

    ${media.mobile`
      display:block;
    `} ${media.tabletAndUp`
      max-width: 261px;
      width: 50%;
    `};
  `



export default ButtonSecondary
