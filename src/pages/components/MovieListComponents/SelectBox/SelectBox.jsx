/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useFloating, flip, shift } from '@floating-ui/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SearchIcon from '@mui/icons-material/Search'
import _ from 'lodash'
import useDebounce from 'hooks/useDebounce'
import style from './SelectBox.module.css'

const SelectBox = ({ setValue: setValueForm, id, haveSearchBar, list }) => {
  const { x, y, strategy, refs } = useFloating({
    placement: 'bottom',
    middleware: [flip(), shift()],
  })
  const [value, setValue] = useState(0)
  const [show, setShow] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [listItem, setListItem] = useState(list)
  const listItemDebounce = useDebounce(listItem, 500)

  const handleOnClick = (e) => {
    const temp = e.target.closest(`.item-${id}`).getAttribute('data-value')
    const index = list.findIndex((item) => item.value === temp)
    setValueForm(id, temp, { shouldDirty: true })
    setValue(index)
    setSearchInput('')
  }

  useEffect(() => {
    const handleOnClickShow = (e) => {
      if (e.target.closest(`.${id}`)) {
        setShow(!show)
        return
      }
      if (!e.target.closest(`.item-${id}`) && e.target.closest(`.list-${id}`)) return
      setShow(false)
    }
    window.addEventListener('click', handleOnClickShow)
    return () => {
      window.removeEventListener('click', handleOnClickShow)
    }
  }, [show, id])

  useEffect(() => {
    const newList = list.filter((item) => item.title.toLowerCase().includes(searchInput.trim().toLowerCase()))
    setListItem(newList)
  }, [list, searchInput])

  return (
    <div className={`${style.dropDown}`}>
      <div ref={refs.setReference} className={`${style.title} ${show ? style.titleActive : ''} ${id}`}>
        {!_.isNil(list) && list[value]?.img ? (
          <div className='flex items-center'>
            <img src={list[value].img} alt='' className='w-[2.4rem] block mr-[1rem]' loading='lazy' />
            {list[value].title}
          </div>
        ) : (
          <div className=''>{list[value].title}</div>
        )}
        <ArrowDropDownIcon sx={{ stroke: 'black', strokeWidth: '0.1rem' }} />
      </div>
      {show && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          className={`list-${id} ${style.container}`}
        >
          {haveSearchBar && (
            <div className='relative'>
              <input
                autoFocus
                className={`${style.input}`}
                type='text'
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value)
                }}
              />
              <SearchIcon className='absolute top-[50%] right-[8%] -translate-y-1/2' />
            </div>
          )}
          <div className={`${style.list}`}>
            {listItemDebounce &&
              listItemDebounce.map((item) => {
                if (item.value === list[value].value) {
                  return (
                    <button
                      type='button'
                      className={`${style.listItem} ${style.listItemSelected} item-${id}`}
                      data-value={item.value}
                      onClick={handleOnClick}
                      key={_.uniqueId()}
                    >
                      {!_.isNil(list) && !_.isNil(item?.img) && (
                        <img src={item.img} alt='' className='w-[2.4rem] block mr-[1rem]' loading='lazy' />
                      )}
                      {item.title}
                    </button>
                  )
                }

                return (
                  <button
                    type='button'
                    className={`${style.listItem} item-${id}`}
                    data-value={item.value}
                    onClick={handleOnClick}
                    key={_.uniqueId()}
                  >
                    {!_.isNil(list) && !_.isNil(item?.img) && (
                      <img src={item.img} alt='' className='w-[2.4rem] block mr-[1rem]' loading='lazy' />
                    )}
                    {item.title}
                  </button>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}

SelectBox.propTypes = {
  haveSearchBar: PropTypes.bool,
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
}

SelectBox.defaultProps = {
  haveSearchBar: false,
}

export default SelectBox
