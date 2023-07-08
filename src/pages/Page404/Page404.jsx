import { Link } from 'react-router-dom'

/* eslint-disable react/no-unescaped-entities */
const Page404 = () => {
  return (
    <div className='max-w-[140rem] m-auto px-[4rem]'>
      <div className='py-[3rem]'>
        <h2 className='text-[2.4rem] font-semiBold mb-[2rem]'>Oops! We can't find the page you're looking for</h2>
        <p>
          You tried to request a page that doesn't exist. If you believe this to be in error, let us know{' '}
          <Link to='/' className='text-info not-italic'>
            on the forums
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Page404
