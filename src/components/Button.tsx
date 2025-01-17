import React from "react";
import "./button.css";

export interface ButtonProps {
  label: string;
  size?: "1" | "2" | "3" | "4" | "5";
  varient?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
}

const Button = ({ label, size = "1", varient = "solid" }: ButtonProps) => {
  const size_class = `rt-r-size-${size}`;
  const varient_class = `rt-variant-${varient}`;

  const className = `rt-reset rt-BaseButton rt-Button ${size_class} ${varient_class}`;

  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
};

export default Button;
