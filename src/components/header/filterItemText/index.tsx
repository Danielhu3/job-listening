import React from 'react'
import { FilterItemText } from './style'
type Props = {
    filterItemText:string;
}
const index = ({filterItemText}:Props) => {
  return (
    <FilterItemText>{filterItemText}</FilterItemText>
  )
}

export default index