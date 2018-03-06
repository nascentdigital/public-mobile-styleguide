import styled from 'styled-components'
import colors from '../colors'
import media from '../mediaQueries'
import fontSize from '../fontSize'

const Display = styled.h2`
  ${fontSize(74)}
  letter-spacing: 1px;
  color: ${colors.greydark};
  margin: 0;
  font-family: 'Anton', sans-serif;

  ${media.tablet`${fontSize(80)}`}
`

export default Display
