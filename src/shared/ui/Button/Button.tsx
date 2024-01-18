import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode | ReactNode[];
  theme: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [cls[className], cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
