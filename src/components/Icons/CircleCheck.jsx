import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../colors'

 const CircleCheck = ({ className }) => {
  const CircleWrap = styled.svg`
    width: 38px;
    height: 30px;
  `
  const Circle = styled.circle`
    fill: ${colors.tealdark};
  `
  const Check = styled.path`
    fill: ${colors.white};
  `
  return (
    <CircleWrap className={className}>
      <Circle cx="14.8" cy="14.8" r="14.8" />
      <Check d="M7.7,15.2c-0.3,0.3-0.3,1,0,1.4l4,4c0.3,0.3,1,0.4,1.3,0l0.6-0.6l1.4-1.3l6.6-6.3
            c0.3-0.3,0.4-1,0-1.3l-0.8-0.8c-0.3-0.3-1-0.3-1.3,0l-6.5,6.5c-0.3,0.3-1,0.3-1.3,0l-2.2-2.2c-0.3-0.3-1-0.3-1.3,0L7.7,15.2
                L7.7,15.2z" />
    </CircleWrap>
  )
}
CircleCheck.propTypes = {
  className: PropTypes.string
}

export default CircleCheck
