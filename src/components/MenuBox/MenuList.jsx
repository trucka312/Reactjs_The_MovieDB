import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const MenuList = ({ listData }) => {
  return (
    <ul className='cursor-pointer text-dark'>
      {listData.map((item) => (
        <li className='hover:bg-lightGray w-full px-[2rem] py-[.3rem] capitalize' draggable key={uuidv4()}>
          <Link to={`/${item.link}`} className='py-[2px] text-[1.4rem] font-[400] w-full block'>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
MenuList.propTypes = {
  listData: PropTypes.oneOfType([() => null, PropTypes.object]),
}
MenuList.defaultProps = {
  listData: [],
}
export default MenuList
