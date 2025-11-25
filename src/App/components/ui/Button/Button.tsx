import type React from "react";
import style from "./Button.module.css";

interface IButtonProps {
  color?: string;
  type: "reset" | "submit" | "button";
  children: React.ReactNode | string | Array<React.ReactElement | string>;
  onButtonClick: () => void;
}

const Button: React.FC<IButtonProps> = ({
  type = "button",
  children,
  color,
  onButtonClick,
}) => {
  return (
    <button
      className={style.Button}
      onClick={onButtonClick}
      type={type}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
