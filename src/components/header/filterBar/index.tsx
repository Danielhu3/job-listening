import React from 'react'
import { FilterBar } from './style'

type Props = {
    children?: JSX.Element[] | JSX.Element;
}
const index = ({children}: Props) => {
  return (
    <FilterBar>{children}</FilterBar>
  )
}

export default index