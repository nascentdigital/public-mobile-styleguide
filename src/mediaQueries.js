import { css } from 'styled-components'

const sizes = {
  desktop: {
    min: 921
  },
  tablet: {
    min: 581,
    max: 920
  },
  mobile: {
    min: 340,
    max: 580
  },
  mobileAndUp: {
    min: 340
  },
  tabletAndUp: {
    min: 581
  }
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  const size = sizes[label]
  const min = (size.min ? `(min-width: ${size.min}px)` : '')
  const max = (size.max ? `(max-width: ${size.max}px)` : '')
  const both = ((size.min && size.max) ? ' and ' : '')
  acc[label] = (...args) => css`
    @media ${min}${both}${max} {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
