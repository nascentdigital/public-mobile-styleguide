import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'


const H3 = styled.h3`
  font-family: 'Anton', sans-serif;
  ${fontSize(24)}
  letter-spacing: 1px;
  color: ${colors.greydark};
  margin: 0;
  text-transform: none;
  ${media.tabletAndUp`${fontSize(35)}`}
`
export default H3
