/* eslint-disable react/no-array-index-key */
const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, id) => (
      <div
        className='skeleton relative mr-[20px]'
        style={{ height: '225px', width: '150px', minWidth: '150px', maxWidth: '150px' }}
        key={id}
      >
        <div className='absolute top-[-19px] left-4'>
          <div className='w-[3.8rem] h-[3.8rem] rounded-full bg-graySoft' />
        </div>
      </div>
    ))
}

export default SkeletonCard
