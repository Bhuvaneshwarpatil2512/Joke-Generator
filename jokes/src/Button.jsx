// Button.js
import React from "react";

const buttonStyle = {
    backgroundColor: '#DA7297',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
};

const Button = (props) => {
    return (
        <button style={buttonStyle} onClick={props.callApi}>
            Click to generate a joke.
        </button>
    );
}

export default Button;
