import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pl" : "en");
  };

  return (
    <Button theme={ThemeButton.CONTAINED} onClick={toggle}>{t("changeLanguage")}</Button>
  );
};
