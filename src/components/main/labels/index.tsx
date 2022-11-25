import React from 'react'
import { Labels } from './style'

type Props = {
    children: JSX.Element[] | JSX.Element;
}
const index = ({children}: Props) => {
  return (
    <Labels>{children}</Labels>
  )
}

export default index