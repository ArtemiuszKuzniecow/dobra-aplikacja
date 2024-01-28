import { ReactNode } from "react";
import cls from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  children: ReactNode;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { children } = props;

  return <div className={cls.message}>{children}</div>;
};
