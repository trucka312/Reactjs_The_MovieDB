import filterMovieSlice from 'app/redux/slices/filterMovieSlice'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const FilterList = ({ listData }) => {
  const dispatch = useDispatch()
  const getValue = (value) => {
    if (value.type === 'dep') dispatch(filterMovieSlice.actions.FILTER_BY_DEP(value.name))
    else dispatch(filterMovieSlice.actions.FILTER_BY_MEDIA(value.name))
  }
  return (
    <ul className='cursor-pointer text-dark'>
      {listData.map((item) => (
        <li
          className='hover:bg-lightGray w-full px-[2rem] py-[.3rem] capitalize'
          onClick={() => getValue(item)}
          draggable
          key={uuidv4()}
        >
          <span className='py-[2px] text-[1.4rem] font-[400] w-full'>{item.name}</span>
          <span className='text-[1.4rem] font-[300] ml-[.6rem]'>{item.count}</span>
        </li>
      ))}
    </ul>
  )
}
FilterList.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.objectOf),
}
FilterList.defaultProps = {
  listData: [],
}
export default FilterList
