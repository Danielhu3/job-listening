import React from 'react'
import { VacancyCompany } from './style'

type Props = {
  company:string;
}
const index = ({company}:Props) => {
  return (
    <VacancyCompany>{company}</VacancyCompany>
  )
}

export default index