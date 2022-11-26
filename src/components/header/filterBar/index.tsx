import React from 'react'
import { FilterBar } from './style'

type Props = {
    children?: JSX.Element[] | JSX.Element;
    filters: Array<string>;
}
const index = ({children, filters}: Props) => {
  return (
    <FilterBar filters={filters}>{children}</FilterBar>
  )
}

export default index