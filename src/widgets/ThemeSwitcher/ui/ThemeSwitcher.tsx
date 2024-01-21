import { Theme, useTheme } from "app/providers/ThemeProvider";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames";
import LightIcon from "shared/assets/icons/light-mode-toggle-icon.svg";
import DarkIcon from "shared/assets/icons/dark-mode-toggle-icon.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [cls[className]])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={50} height={20} />
      ) : (
        <LightIcon width={50} height={20} />
      )}
    </Button>
  );
};
