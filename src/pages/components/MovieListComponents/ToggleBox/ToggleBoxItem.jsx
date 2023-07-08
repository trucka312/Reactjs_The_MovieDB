import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import { GRAY_ICON } from 'constants/colors'
import Tooltip from '../Tooltip/Tooltip'

const ToggleBoxItem = ({ children, header, iconMessage }) => {
  return (
    <div className='px-[1.6rem] py-[1.2rem] border border-transparent border-t-grayBold'>
      <div className='text-normal font-[300] mb-[0.8rem] flex items-center'>
        <div className='mr-[0.8rem]'>{header}</div>
        {!_.isEmpty(iconMessage) && (
          <Tooltip title={iconMessage}>
            <HelpRoundedIcon
              sx={{
                color: GRAY_ICON,
                fontSize: '1.6rem',
              }}
            />
          </Tooltip>
        )}
      </div>
      {children}
    </div>
  )
}

ToggleBoxItem.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string.isRequired,
  iconMessage: PropTypes.string,
}

ToggleBoxItem.defaultProps = {
  children: '',
  iconMessage: '',
}

export default ToggleBoxItem
