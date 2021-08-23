import React from 'react'

const Span : React.FC<{}> = ({children}) => {
  return (
    <span style={{color:'green', padding: '10px 5px'}}>{children}</span>
  )
}

export default Span