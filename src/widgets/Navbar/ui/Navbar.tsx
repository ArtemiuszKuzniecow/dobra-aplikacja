import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className: string;
}

export const Navbar = (props: NavbarProps) => {
  const { t: tMain } = useTranslation('main');
  const { t: tAbout } = useTranslation('about');
  const { className } = props;
  return (
    <div className={classNames(cls.navbar, {}, [cls[className]])}>
      <div className={cls.links}>
        <AppLink to="/">{tMain('mainHeadline')}</AppLink>
        <AppLink to="/about">{tAbout('aboutHeadline')}</AppLink>
        <ThemeSwitcher className="" />
      </div>
    </div>
  );
};
