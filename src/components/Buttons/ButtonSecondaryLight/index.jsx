import styled from 'styled-components'
import colors from '../../../colorcode'
import media from '../../../mediaQueries'

  const ButtonSecondaryLight = styled.button`
    text-align: center;
    border-radius: 8px;
    font-family: Open Sans, sans-serif;
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
      max-width: 261px;
      width: 50%;
    `};
  `


export default ButtonSecondaryLight
