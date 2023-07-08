import { Skeleton } from '@mui/material'

const InfoSkeleton = () => {
  return (
    <div className='w-[30rem] md:w-full'>
      <Skeleton variant='rounded' width='100%' height='45rem' animation='wave' />
      <Skeleton variant='text' width='100%' sx={{ fontSize: '3rem' }} animation='wave' />
      <Skeleton variant='text' width='100%' sx={{ fontSize: '2rem' }} animation='wave' />
      <Skeleton variant='text' width='100%' sx={{ fontSize: '2rem' }} animation='wave' />
    </div>
  )
}

export default InfoSkeleton
