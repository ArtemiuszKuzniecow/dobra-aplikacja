import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode | ReactNode[];
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const {
    className, children, theme = ThemeButton.CLEAR, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [cls[className], cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
