import React from 'react'
import { LabelsItem } from './style'

type Props = {
  labelsItemText: string;
}
const index = ({labelsItemText}:Props) => {
  return (
    <LabelsItem>{labelsItemText}</LabelsItem>
  )
}

export default index