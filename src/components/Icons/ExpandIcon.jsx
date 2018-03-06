import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'

 const ExpandIcon = ({ open }) => {
  const CircleWrap = styled.svg`
    width: 28px;
    height: 28px;
  `
  const Circle = styled.circle`
    fill: ${colors.tealdark};
  `
  const Line1 = styled.line`
    stroke: ${colors.white};
    stroke-width: 3;
  `
  const Line2 = styled.line`
    stroke: ${colors.white};
    stroke-width: 3;
  `
  return (
    <CircleWrap>
      <Circle cx="14" cy="14" r="14" />
      {!open && <Line1 x1="14" y1="7" x2="14" y2="21" />}
      <Line2 x1="7" y1="14" x2="21" y2="14" />
    </CircleWrap>
  )
}


ExpandIcon.propTypes = {
  open: PropTypes.bool
}
ExpandIcon.defaultProps = {
  open: false
}

export default ExpandIcon
