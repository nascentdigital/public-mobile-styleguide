import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'


const H4 = styled.h4`
  ${fontSize(16)}
  letter-spacing: -1px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  text-transform: capitalize;
  color: ${colors.greydark};
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  text-transform: none;
  ${media.desktop`${fontSize(24)}`};
`

export default H4
