import React from 'react'
import { Details } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <Details>{children}</Details>
  )
}

export default index