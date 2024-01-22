import { classNames } from "shared/lib/classNames";
import cls from "../Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const {t} = useTranslation("")
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevState: boolean) => !prevState);
  };
  const { className } = props;

  return (
    <div
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        cls[className],
      ])}
    >
      <button onClick={onToggle}>{collapsed ? t("show") : t("hide")}</button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
