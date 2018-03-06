const calculateRem = (size) => {
  const baseFontSize = 16
  return `${size / baseFontSize}rem`
}

const fontSize = (size) => {
  return `
    font-size: ${size}px;
    font-size: ${calculateRem(size)};
  `
}

export default fontSize
