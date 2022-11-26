import React from 'react'
import { Card } from './style'

type Props = {
  children?: JSX.Element[];
  isFeatured: boolean;
}
const index = ({children, isFeatured}: Props) => {
  return (
    <Card isFeatured={isFeatured}>{children}</Card>
  )
}

export default index