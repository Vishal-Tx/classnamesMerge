import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../cn-utility-function";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "stop" | "go";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        `border-2 px-4 py-1 font-bold text-white rounded-lg w-max disabled:cursor-not-allowed ${className}`,
        {
          "bg-red-600": variant === "stop",
          "bg-green-600": variant === "go",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
