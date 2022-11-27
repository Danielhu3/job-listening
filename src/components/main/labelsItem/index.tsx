import React from 'react'
import { LabelsItem } from './style'

type Props = {
  labelsItemText: string;
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const index = ({labelsItemText, setFilters}:Props) => {

  function addFilter(){
    setFilters((items)=> items.includes(labelsItemText) ? items :  [...items,labelsItemText])
  
  }
  return (
    <LabelsItem onClick={()=>addFilter()}>{labelsItemText}</LabelsItem>
  )
}

export default index