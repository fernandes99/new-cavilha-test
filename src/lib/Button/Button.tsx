import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Button(props: Props) {
  return (
    <div>
      <button>{props.label}</button>
    </div>
  );
}

export default Button;