import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/light-mode-toggle-icon.svg';
import DarkIcon from 'shared/assets/icons/dark-mode-toggle-icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcherIcon, {}, [cls[className]])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? (
        <DarkIcon
          width={50}
          height={20}
          className={classNames(cls.icon, {}, [cls[className]])}
          style={{ fill: 'var(--header-font-color)' }}
        />
      ) : (
        <LightIcon
          width={50}
          height={20}
          style={{ fill: 'var(--header-font-color)' }}
        />
      )}
    </Button>
  );
};
