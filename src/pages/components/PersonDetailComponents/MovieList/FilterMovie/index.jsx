/* eslint-disable jsx-a11y/no-static-element-interactions */
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone'
import { ICON_STYLES } from 'constants/muiStylesIcon-Ava'
import { MenuToolTip } from 'components/HtmlToolTips'
import { FilterList } from 'components/MenuBox'
import { useDispatch, useSelector } from 'react-redux'
import { filterMovieList, originalMovieList } from 'app/redux/selectors'
import _ from 'lodash'
import filterMovieSlice from 'app/redux/slices/filterMovieSlice'

const FilterMovies = () => {
  const dispatch = useDispatch()
  const originalMovieArr = useSelector(originalMovieList)
  const filterMovieArr = useSelector(filterMovieList)
  const countDepartment = _.countBy(originalMovieArr, 'department')
  const listDepartment = Object.entries(countDepartment).map(([name, count]) => ({ name, count, type: 'dep' }))
  const countMediaType = _.countBy(originalMovieArr, 'media_type')
  const listMediaType = Object.entries(countMediaType).map(([name, count]) => ({ name, count, type: 'media' }))
  const handleClear = () => dispatch(filterMovieSlice.actions.FILTER_CLEAR())
  return (
    <div className='flex absolute right-0 top-[.5rem]'>
      {!_.isEmpty(filterMovieArr) && (
        <div className='cursor-pointer mr-[3rem]' onClick={handleClear}>
          <span className='text-info hover:text-secondary'>Clear</span>
        </div>
      )}
      <MenuToolTip placement='bottom-start' title={<FilterList listData={listMediaType} />}>
        <div className='cursor-pointer relative'>
          <span className='hover:text-textMeta'>All</span>
          <ArrowDropDownTwoToneIcon sx={ICON_STYLES.dropDownIcon} />
        </div>
      </MenuToolTip>
      <MenuToolTip placement='bottom-start' title={<FilterList listData={listDepartment} />}>
        <div className='cursor-pointer ml-[3rem] relative'>
          <span className='hover:text-textMeta'>Department</span>
          <ArrowDropDownTwoToneIcon sx={ICON_STYLES.dropDownIcon} />
        </div>
      </MenuToolTip>
    </div>
  )
}

export default FilterMovies
