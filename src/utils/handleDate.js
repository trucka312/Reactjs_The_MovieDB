// Import thư viện Day.js vào trong mã JavaScript
import dayjs from 'dayjs'

export const handleDate = (date) => {
  const dateObj = dayjs(date)
  const newDateString = dateObj.format('MM/DD/YYYY')
  return newDateString
}
