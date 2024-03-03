import React from 'react'
import styles from "./Button.module.css";
// rom ar gavameoro moqmedeba rogoric ari onchange....
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>{
    color: 'red' | 'blue' | 'orange'
}

export const Button :React.FC<ButtonProps> = ({children , color , onClick , ...props}) => {
    const className = `${styles.button} ${styles[ `button_${color}`]}`
  return (
    <button className={className} onClick={onClick} {...props}>{children} </button>
  )
}
