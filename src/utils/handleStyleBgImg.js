import _ from 'lodash'

export const handleStyleBgImg = (color = [31.5, 10.5, 10.5]) => {
  color = _.isEmpty(color) ? [31.5, 10.5, 10.5] : color
  const [A, B, C] = color
  const bgStyle = {
    backgroundImage: `linear-gradient(to right, rgba(${A}, ${B}, ${C}, 1) calc((50vw - 170px) - 340px), rgba(${A}, ${B}, ${C}, 0.84) 50%, rgba(${A}, ${B}, ${C}, 0.84) 100%)`,
    height: '100px',
  }
  return bgStyle
}
