import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui';

interface LangSwitcherProps {
  collapsed: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { collapsed } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
  };

  return (
    <Button theme={ThemeButton.CONTAINED} onClick={toggle}>
      {collapsed ? t('changeLanguageShort') : t('changeLanguageFull')}
    </Button>
  );
};
