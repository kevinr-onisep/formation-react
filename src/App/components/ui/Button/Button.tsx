import type React from "react";
import style from "./Button.module.css";

interface IButtonProps {
  color?: string;
  type: "reset" | "submit" | "button";
  children: React.ReactNode | string | Array<React.ReactElement | string>;
}

const Button: React.FC<IButtonProps> = ({
  type = "button",
  children,
  color,
}) => {
  const handleClick = () => {
    switch (type) {
      case "reset":
        onReset();
        break;
      case "submit":
        onSubmit();
        break;
      case "button":
        onPressButton();
        break;
      default:
        break;
    }
  };

  return (
    <button
      className={style.Button}
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;

function onReset() {
  console.log("Reset");
}

function onSubmit() {
  console.log("Submitted");
}

function onPressButton() {
  console.log("Pressed");
}
