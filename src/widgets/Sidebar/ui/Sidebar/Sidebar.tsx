import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from '../Sidebar.module.scss';
import { SidebarToggleSwitcher } from '../SidebarToggleSwitcher/SidebarToggleSwitcher';

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
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        cls[className],
      ])}
    >
      <div className={cls.switcher}>
        <LangSwitcher collapsed={collapsed} />
        <SidebarToggleSwitcher onToggle={onToggle} collapsed={collapsed} />
      </div>
    </div>
  );
};
