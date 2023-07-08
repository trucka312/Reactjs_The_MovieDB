/* eslint-disable no-unused-vars */
import _ from 'lodash'

export const handleCertification = (data, nation) => {
  const releases = data?.data?.results
  const usCert = releases?.find((r) => r?.iso_3166_1 === nation)
  const certification = usCert?.release_dates?.find((item) => !_.isEmpty(item.certification))
  return certification?.certification
}
