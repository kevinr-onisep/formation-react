import type React from "react";
import style from "./Button.module.css";
import { useEffect, useState } from "react";

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
  const [isClicked, SetIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        SetIsClicked(false);
      }, 100);
    }
  }, [isClicked]);

  return (
    <button
      className={style.Button + (isClicked ? style.clicked : "")}
      onClick={() => {
        SetIsClicked(true);
        onButtonClick();
      }}
      type={type}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;
