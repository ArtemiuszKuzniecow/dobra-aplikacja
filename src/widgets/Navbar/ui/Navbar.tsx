import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { t: tMain } = useTranslation('main');
  const { t: tAbout } = useTranslation('about');
  const { className } = props;
  return (
    <div className={classNames(cls.navbar, {}, [cls[className]])}>
      <div className={cls.links}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>
          {tMain("mainHeadline")}
        </AppLink>
        <AppLink to={"/about"}>{tAbout("aboutHeadline")}</AppLink>
      </div>
    </div>
  );
};
