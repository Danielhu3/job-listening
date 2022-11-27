import React from 'react'
import { Filters } from './style'

type Props = {
    children?: JSX.Element[] | JSX.Element;
}
const index = ({children}:Props) => {
  return (
    <Filters>{children}</Filters>
  )
}

export default index