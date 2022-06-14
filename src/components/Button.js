import React from "react";

const Button = ({ text = "Button", backgroundColor = "#14C38E", ...props }) => {
  return (
    <button
      style={{
        
        background: backgroundColor,
        padding: 5,
        border: 0,
        margin:10,
        color: "white",
        borderRadius: 10,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
