import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  DEFAULT = "link",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const { children, to, className, theme = AppLinkTheme.DEFAULT } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.link, {}, [cls[className], cls[theme]])}
    >
      {children}
    </Link>
  );
};
