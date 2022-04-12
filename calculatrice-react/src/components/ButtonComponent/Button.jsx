import React from 'react';
import './button.css'

const Button = (props) => {
    return (
        <button className={props.classname}>{props.value}</button>
    )
}

export default Button;
