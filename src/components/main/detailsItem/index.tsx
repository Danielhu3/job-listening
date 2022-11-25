import React from 'react'
import { DetailsItem } from './style'

type Props = {
  detailsItemText: string;
}
const index = ({detailsItemText}: Props) => {
  return (
    <DetailsItem>{detailsItemText}</DetailsItem>
  )
}

export default index