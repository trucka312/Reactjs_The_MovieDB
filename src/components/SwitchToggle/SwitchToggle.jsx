/* eslint-disable react/prop-types */
import { useState, useRef, useLayoutEffect } from 'react'

const SwitchToggle = ({ items, onToggle, isToggle, textColor, bgColor, border }) => {
  //  0. Init Value

  const activeButton = 'bg-clip-text text-transparent bg-fromBluetoGreen'

  // 1. Hook
  const [item1Width, setItem1Width] = useState()
  const [item2Width, setItem2Width] = useState()

  const item1Ref = useRef()
  const item2Ref = useRef()

  useLayoutEffect(() => {
    setItem1Width(item1Ref.current.offsetWidth)
    setItem2Width(item2Ref.current.offsetWidth)
  }, [])

  // 2. Handler Function
  const handleToggle = (selectedItem) => {
    onToggle(selectedItem)
  }

  return (
    <div
      className={`flex items-center h-12 border-solid ${border} rounded-[30px] border-[1px] font-semibold text-2xl relative`}
    >
      <button
        type='submit'
        ref={item1Ref}
        onClick={() => {
          handleToggle(items[0])
        }}
        className={`py-1 px-5 h-12 rounded-[30px] ${isToggle || activeButton} ${textColor} static z-[1]`}
      >
        {items[0].label}
      </button>
      <button
        type='submit'
        ref={item2Ref}
        onClick={() => {
          handleToggle(items[1])
        }}
        className={`py-1 px-5 h-12 rounded-[30px] ${isToggle && activeButton} ${textColor} static z-[1]`}
      >
        {items[1].label}
      </button>
      <div
        className={`h-12 w-20 left-0 ${bgColor} rounded-[30px] absolute z-[0] transition-all duration-150 ease-in`}
        style={
          isToggle ? { left: `${item1Width}px`, width: `${item2Width}px` } : { left: '0', width: `${item1Width}px` }
        }
      />
    </div>
  )
}
export default SwitchToggle
