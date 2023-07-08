const calculateAge = (dob) => {
  const birthday = new Date(dob)
  const today = new Date()
  const calculateTime = today.getTime() - birthday.getTime()
  const ageDate = new Date(calculateTime)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)
  return age
}
export { calculateAge }
