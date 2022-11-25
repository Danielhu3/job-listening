import React from 'react'
import { Position } from './style'

type Props = {
  position: string;
}
const index = ({position}: Props) => {
  return (
    <Position>{position}</Position>
  )
}

export default index