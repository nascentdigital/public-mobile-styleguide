import styled from 'styled-components'
import colors from '../colors'
import media from '../mediaQueries'
import fontSize from '../fontSize'

const Paragraph = styled.p`
  ${fontSize(16)}
  font-family: Open Sans, sans-serif;
  color: ${colors.greydark};
  line-height: 1.5;

  ${media.tabletAndUp`
    ${fontSize(18)}
  `}
`
export default Paragraph
