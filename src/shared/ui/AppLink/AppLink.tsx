import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const { children, to, className, theme = AppLinkTheme.PRIMARY } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.link, {}, [cls[className], cls[theme]])}
    >
      {children}
    </Link>
  );
};
