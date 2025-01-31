import React from 'react'

const Button = ({buttonClass, label, parentMethod}) => {
return(
    <button className={`${buttonClass}`} onClick ={parentMethod}>
        {label}
    </button>
)
}
export default Button