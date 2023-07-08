export const hanleString = (dataMovie) => {
  const jsondata = JSON.stringify(dataMovie)
  const stringdata = JSON.parse(jsondata)
  const stringoverview = stringdata.overview
  // console.log(JSON.stringify(stringdata))
  const overviewstring = JSON.stringify(stringoverview, null, 2)
  // console.log('🚀 ~ jsonString:', jsonString)
  const reult1 = overviewstring?.replace('\\"', '')
  const reult2 = reult1?.replace('\\"', '')
  const resultEnd = reult2?.split('\\r')
  return resultEnd
}
