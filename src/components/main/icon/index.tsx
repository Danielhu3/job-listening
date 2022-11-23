import React from 'react'
import { Icon } from './style'

type Props = {
    children: JSX.Element;
}
const index = ({children}: Props) => {
  return (
    <Icon>{children}</Icon>
  )
}

export default index