import React from 'react'
import { FilterItem } from './style'

type Props = {
    children?: JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <FilterItem>{children}</FilterItem>
  )
}

export default index