const formatDate = (str) => {
  const date = new Date(str)
  const options = { month: 'short', day: 'numeric', year: 'numeric' }

  return date.toLocaleDateString(undefined, options)
}

export const formatDateForm = (str) => {
  const date = new Date(str)
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

  return date.toLocaleDateString('en-SE', options)
}

export default formatDate
