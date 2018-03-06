import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'

const H5 = styled.h5`
  ${fontSize(16)}
  letter-spacing: -1px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: ${colors.greydark};
  margin: 0;
  ${media.desktop`${fontSize(24)}`};`

  export default H5
