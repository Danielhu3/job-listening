import React from 'react'
import { Card } from './style'

type Props = {
  children?: JSX.Element[]
}
const index = ({children}: Props) => {
  return (
    <Card>{children}</Card>
  )
}

export default index