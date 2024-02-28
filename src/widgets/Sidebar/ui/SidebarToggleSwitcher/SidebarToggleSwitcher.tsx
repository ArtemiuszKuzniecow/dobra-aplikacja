import { Button, ThemeButton } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from '../Sidebar.module.scss';

interface SidebarToggleSwitcherProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const SidebarToggleSwitcher = (props: SidebarToggleSwitcherProps) => {
  const { collapsed, onToggle } = props;
  const { t } = useTranslation('');

  return (
    <div className={cls.sidebarSwitcherButton}>
      <Button theme={ThemeButton.OUTLINED} onClick={onToggle} data-testid="sidebar-toggle">
        {collapsed ? t('show') : t('hide')}
      </Button>
    </div>
  );
};
