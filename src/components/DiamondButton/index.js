import React, { useState } from "react";

import './DiamondButton.scss'

const styles = [
    "btn--primary",
    "btn--secondary",
    "btn--tertiary"
]

const sizes = [
    "btn--large",
    "btn--medium",
    "btn-small"
]

export const DiamondButton = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

    const checkButtonSize = sizes.includes(checkButtonSize) ? buttonSize : sizes[0];

    return(
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type}>

                {children}

        </button>
    )
}
