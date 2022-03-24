import React from "react";
import './Button.css';

interface Props {
  children: React.ReactNode    
}
function Button(props: Props) {
  return (
      <>
      <button>
        {props.children}
      </button>
      </>
  )    
}
export default Button; 