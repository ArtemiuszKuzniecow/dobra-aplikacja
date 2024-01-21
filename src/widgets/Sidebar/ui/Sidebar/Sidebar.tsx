import { classNames } from "shared/lib/classNames";
import cls from "../Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
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
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
