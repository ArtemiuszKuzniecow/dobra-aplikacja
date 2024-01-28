import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "../Sidebar.module.scss";
import { useTranslation } from "react-i18next";

interface SidebarToggleSwitcherProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const SidebarToggleSwitcher = (props: SidebarToggleSwitcherProps) => {
  const { collapsed, onToggle } = props;
  const { t } = useTranslation("");

  return (
    <div className={cls.sidebarSwitcherButton}>
      <Button theme={ThemeButton.OUTLINED} onClick={onToggle}>
        {collapsed ? t("show") : t("hide")}
      </Button>
    </div>
  );
};
