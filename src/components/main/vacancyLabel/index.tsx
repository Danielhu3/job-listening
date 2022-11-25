import React from 'react'
import { VacancyLabel } from './style'

type Props = {
  labelType:string;
}
const index = ({labelType}:Props) => {
  return (
    <VacancyLabel labelType={labelType}>{labelType.toUpperCase()}</VacancyLabel>
  )
}

export default index