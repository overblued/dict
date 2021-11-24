import React from 'react'

const SearchBarList = ({hidden,items, onSelect}) => {
  const parseListItem = (item,key) => {
    return (
      <li onMouseDown={e => e.preventDefault()} onClick={() => onSelect(item)}
       key={key}>{item}</li>
    )
  }
  return (
    <ul hidden={hidden}>
      {items.map(parseListItem)} 
    </ul>
  )
}
export default SearchBarList
