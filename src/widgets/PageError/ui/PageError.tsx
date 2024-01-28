import { Button, ErrorMessage, ThemeButton } from "shared/ui";
import { t } from "i18next";
import cls from "./PageError.module.scss";

export const PageError = () => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={cls.error}>
      <ErrorMessage>{t("errorMessage")}</ErrorMessage>
      <Button theme={ThemeButton.CONTAINED} onClick={reloadPage}>
        {t("reloadPage")}
      </Button>
    </div>
  );
};
