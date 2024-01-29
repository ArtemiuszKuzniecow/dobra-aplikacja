import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui";
import cls from "./Navbar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { t: tMain } = useTranslation("main");
  const { t: tAbout } = useTranslation("about");
  const { className } = props;
  return (
    <div className={classNames(cls.navbar, {}, [cls[className]])}>
      <div className={cls.links}>
        <AppLink to={"/"}>{tMain("mainHeadline")}</AppLink>
        <AppLink to={"/about"}>{tAbout("aboutHeadline")}</AppLink>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </div>
  );
};
