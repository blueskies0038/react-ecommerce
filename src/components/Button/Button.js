import React from 'react'
import './Button.scss'

const Button = ({children, isGoogle, ...otherProps}) => (
    <button className={"custom-button" + (isGoogle ? " google-auth" : "")} {...otherProps}>
        {children}
    </button>
)

export default Button