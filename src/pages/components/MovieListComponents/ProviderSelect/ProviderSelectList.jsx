/* eslint-disable max-len */
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { getProviders } from 'apis/movieListApi'
import ProviderSelect from './ProviderSelect'

const ProviderSelectList = ({ watch, register, setValue: setFormValue }) => {
  const ottRegion = watch('ott_region')
  const [listData, setListData] = useState([])

  useEffect(() => {
    setFormValue('provider', '')
    const getData = async () => {
      const rs = await getProviders({
        watch_region: ottRegion,
      })
      const formatData = rs.data.results.map((item) => ({
        id: item.provider_id,
        name: item.provider_name,
        img: item.logo_path,
      }))
      setListData(formatData)
    }
    if (!_.isEmpty(ottRegion)) {
      getData()
    }
  }, [ottRegion, setFormValue])
  return (
    <div className='flex justify-between shrink-0 flex-wrap '>
      {listData &&
        listData.map((item) => (
          <ProviderSelect key={item.id} id={item.id} img={item.img} register={register} name={item.name} />
        ))}
    </div>
  )
}

ProviderSelectList.propTypes = {
  register: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default ProviderSelectList
