import React from 'react'

const Button : React.FC<{}> = ({children}) => {
  return (
    <button 
    style={{padding:'10px 14px', backgroundColor:'blue', color: 'white', border: 0, borderRadius: '10px', outline: 'none', fontSize: '1.2rem'}}>
      {children}
    </button>
  )
}

export default Button