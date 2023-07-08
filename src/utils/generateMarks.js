const generateMarks = (min, max, step, bigStepList) => {
  const length = (max - min) / step + 1
  return Array(length)
    .fill(0)
    .map((_, i) => {
      const temp = i * step + min
      if (bigStepList.includes(temp)) {
        return {
          value: temp,
          label: `${temp}`,
        }
      }
      return {
        value: temp,
        label: '',
      }
    })
}

export default generateMarks
