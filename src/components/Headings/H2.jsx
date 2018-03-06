import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'

const H2 = styled.h2`
  letter-spacing: 1.3px;
  color: ${colors.greydark};
  font-family: 'Anton', sans-serif;
  margin: 0;
  font-weight: 500;
  text-transform: none;
  ${fontSize(25)}
  line-height: 1.5;
  ${media.tabletAndUp`${fontSize(45)}`};
`
export default H2
