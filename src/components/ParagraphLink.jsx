import styled from 'styled-components'
import colors from '../colors'
import fontSize from '../fontSize'

const ParagraphLink = styled.a`
    color: ${colors.tealdark};
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    ${fontSize(20)}

    &:hover {
      color: ${colors.teallight};
      cursor: pointer;
    }

    &:active {
      color: ${colors.tealmedium};
    }
  `

export default ParagraphLink
