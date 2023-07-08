const SearchButton = (props) => {
  return (
    <button
      {...props}
      type='submit'
      className='h-[46px] rounded-[30px] flex justify-center items-center py-2.5 px-6 bg-fromBluetoGreen text-white font-semibold hover:text-black'
    >
      Search
    </button>
  )
}

export default SearchButton
