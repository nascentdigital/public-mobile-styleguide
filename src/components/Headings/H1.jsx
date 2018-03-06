import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'

 const H1 = styled.h1`
  ${fontSize(30)}
  letter-spacing: 1.4px;
  font-family: 'Anton', sans-serif;
  line-height: 1.2;
  color: ${colors.greydark};
  margin: 0;
  font-weight: 500;
  text-transform: none;
  ${media.tabletAndUp`${fontSize(55)}`};

  `

  export default H1
