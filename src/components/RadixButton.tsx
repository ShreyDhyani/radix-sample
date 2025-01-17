import React from "react";
import { Button } from "@radix-ui/themes";

export interface RadixButtonProps {
  label: string;
  size?: "1" | "2" | "3" | "4";
  varient?: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
}

const RadixButton = ({ label, size, varient }: RadixButtonProps) => {
  return (
    <Button size={size} variant={varient}>
      {label}
    </Button>
  );
};

export default RadixButton;
