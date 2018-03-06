import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../colors'
import media from '../../mediaQueries'
import fontSize from '../../fontSize'

 const CheckMark = () => {
  const Check = styled.svg`
    margin-right: 10px;
    width: 16px;
    height: 12px;
  `
  const Line = styled.path`
    fill: ${colors.bluedark};
  `
  return (
    <Check>
      <Line
        fillRule="evenodd"
        d="M.26 5.748c-.36.38-.34 1.14.02 1.51l4.39 4.45c.37.38 1.11.39 1.49.03l.7-.67 1.51-1.45 7.339-7c.38-.36.39-1.1.02-1.47l-.85-.87c-.37-.37-1.11-.37-1.48-.01l-7.18 7.17c-.37.37-1.11.36-1.47-.01L2.36 5.018c-.36-.38-1.08-.37-1.44.02l-.66.71z"
      />
    </Check>
  )
}

export default CheckMark
