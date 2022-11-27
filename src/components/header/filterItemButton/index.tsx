import React from 'react'
import { FilterItemButton } from './style'

type Props = {
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
  filterItemText:string;
}
const index = ({setFilters, filterItemText}:Props) => {
  function removeFilter(){
    setFilters((filters)=> filters.filter(function(filter){
      return filter !== filterItemText;
    }))

  }
  return (
    <FilterItemButton onClick={()=>removeFilter()}></FilterItemButton>
  )
}

export default index