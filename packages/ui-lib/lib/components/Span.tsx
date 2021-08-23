import React, { HTMLAttributes, DetailedHTMLProps } from 'react'

type SpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

const Span : React.FC<SpanProps> = ({children, ...props}) => {
  return (
    <span
        style={{color:'green', padding: '10px 5px'}}
        {...props}
    >
      {children}
    </span>
  )
}

export default Span