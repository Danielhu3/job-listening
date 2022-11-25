import React from 'react'
import { IconImage } from './style'

type Props = {
  logo: string;
}
const index = ({logo}: Props) => {
  return (
    <IconImage src={String(logo)}></IconImage>
  )
}

export default index