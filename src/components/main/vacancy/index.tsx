import React from 'react'
import { Vacancy } from './style'
type Props = {
  children: JSX.Element[] | JSX.Element;
}
const index = ({children}:Props) => {
  return (
    <Vacancy>{children}</Vacancy>
  )
}

export default index