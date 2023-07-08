import PropTypes from 'prop-types'
import { getKeywords } from 'apis/movieListApi'
import REACT_SELECT_STYLE from 'constants/styleReactSelect'
import React, { useCallback } from 'react'
import AsyncSelect from 'react-select/async'
import Spinner from 'components/Spinner'
import { GRAY_ICON } from 'constants/colors'
import _ from 'lodash'

const promiseOptions = (inputValue) => {
  return getKeywords(inputValue).then((data) => {
    return data.data.results.map((item) => ({
      value: item.id,
      label: item.name,
    }))
  })
}

const KeywordSelect = ({ setValue: setFormValue, name }) => {
  const handleChange = (e) => {
    setFormValue(name, Array.isArray(e) ? e.map((x) => x.value) : '', { shouldDirty: true })
  }
  const root = document.querySelector('#root')

  const loadOptions = useCallback(
    _.debounce((inputText, callback) => {
      promiseOptions(inputText).then((options) => callback(options))
    }, 1000),
    [],
  )

  return (
    <AsyncSelect
      cacheOptions
      menuPortalTarget={root}
      isMulti
      noOptionsMessage={() => 'No data found'}
      loadOptions={loadOptions}
      onChange={handleChange}
      placeholder='Filter by keywords...'
      styles={REACT_SELECT_STYLE}
      components={{
        LoadingIndicator: KeywordSpinner,
      }}
    />
  )
}

const KeywordSpinner = () => {
  return <Spinner size='1.8rem' borderWidth='1px' color={GRAY_ICON} />
}

KeywordSelect.propTypes = {
  name: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default KeywordSelect
