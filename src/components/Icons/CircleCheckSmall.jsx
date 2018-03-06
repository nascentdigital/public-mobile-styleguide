import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'


 const CircleCheckSmall = ({ className }) => {
  const Check = styled.svg`
    width: 20px;
    height: 20px;
  `
  return (
    <Check className={className}>
      <g fill="none" fillRule="evenodd">
        <circle cx="9.883" cy="9.883" r="9.883" fill="#018096" />
        <path fill="#FFF" d="M5.156 10.116c-.216.227-.204.683.012.905l2.634 2.67c.222.228.666.234.894.018l.42-.402.906-.87 4.403-4.2c.228-.215.234-.66.012-.881l-.51-.522c-.222-.222-.666-.222-.888-.006l-4.307 4.301c-.222.222-.666.216-.882-.006L6.416 9.678c-.216-.228-.648-.222-.864.012l-.396.426z" />
      </g>
    </Check>
  )
}

CircleCheckSmall.propTypes = {
  className: PropTypes.string
}

export default CircleCheckSmall
