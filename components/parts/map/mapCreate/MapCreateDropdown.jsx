import React from 'react'
import {AiFillStar} from 'react-icons/ai'

function MapCreateDropdown({color, setIsShowingDropDown, setSelectedColor,setError, setSelectedCss}) {

  return (
    <>
    <li
      onClick={(pre) => {
        setIsShowingDropDown(!pre);
        setSelectedColor(color.color)
        setSelectedCss(color.css)
        setError('')
      }}
      className="text-gray-700 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
    >
      <p>{color.color}</p>
      <AiFillStar className={color.css} />
    </li>
  </>
  )
}

export default MapCreateDropdown