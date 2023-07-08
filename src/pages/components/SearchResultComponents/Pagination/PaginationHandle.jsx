/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const PaginationHandle = ({ totalpage, parentCallback }) => {
  const [page, setPage] = useState(1)
  const totalPage = !_.isNull(totalpage) ? totalpage : 1

  const handleChange = (event, value) => {
    setPage(value)
    parentCallback(page)
  }

  return (
    <div className='my-[20px] mx-auto w-full absolute bottom-0 ml-[20%]'>
      <Stack spacing={2}>
        <Typography sx={{ fontSize: '1.4rem', marginLeft: '12%', fontWeight: '500', color: '#01b4e4' }}>
          Page : {page}
        </Typography>
        <Pagination size='large' classes={{ fontSize: '2rem' }} count={totalPage} page={page} onChange={handleChange} />
      </Stack>
    </div>
  )
}

PaginationHandle.prototype = {
  parentCallback: PropTypes.func,
  totalpage: PropTypes.number,
}

export default PaginationHandle
