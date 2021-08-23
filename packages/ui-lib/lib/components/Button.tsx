import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button : React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button 
    style={{padding:'10px 14px', backgroundColor:'blue', color: 'white', border: 0, borderRadius: '10px', outline: 'none', fontSize: '1.2rem'}}
    {...props}
    >
      {children}
    </button>
  )
}

export default Button