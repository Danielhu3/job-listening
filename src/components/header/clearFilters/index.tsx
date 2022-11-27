import React from 'react'
import { ClearFilters } from './style'

type Props = {
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}
const index = ({setFilters}:Props) => {
  function clearFilters(){
    setFilters([])
  }
  return (
    <ClearFilters onClick={()=>clearFilters()}>Clear</ClearFilters>
  )
}

export default index