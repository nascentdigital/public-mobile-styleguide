import styled from 'styled-components'
import colors from '../colors'
import media from '../mediaQueries'
import fontSize from '../fontSize'

 const PriceHeading = styled.h2`
  ${fontSize(70)}
  font-family: 'Anton', sans-serif;
  letter-spacing: -1px;
  font-weight: 400;
  color: ${colors.greydark};
  margin: 0;
  ${media.tablet`${fontSize(80)}`};
  ${media.desktop`${fontSize(125)}`};
`

export default PriceHeading
