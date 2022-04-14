import React from "react";

function SearchDropdown({ list, setIsShowingDropDown, setSelectedTitleToAdd, setError }) {
  return (
    <>
      <li
        onClick={(pre) => {
          setIsShowingDropDown(!pre);
          setSelectedTitleToAdd(list.title);
          setError('')
        }}
        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 "
      >
        {list.title}
      </li>
    </>
  );
}

export default SearchDropdown;
