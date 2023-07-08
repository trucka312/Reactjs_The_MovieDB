import { Skeleton } from '@mui/material'

const PersonSkeleton = () => {
  return (
    <div className='w-full'>
      <Skeleton variant='rounded' width='100%' height='35rem' animation='wave' />
      <Skeleton variant='rounded' width='100%' height='15rem' sx={{ marginTop: '30px' }} animation='wave' />
      <Skeleton variant='text' width='100%' sx={{ fontSize: '3rem' }} animation='wave' />
    </div>
  )
}

export default PersonSkeleton
