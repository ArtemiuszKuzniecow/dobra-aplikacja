import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.navbar, {}, [cls[className]])}>
      <div className={cls.links}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
          Main page
        </AppLink>
        <AppLink to={"/about"}>About</AppLink>
      </div>
    </div>
  );
};
