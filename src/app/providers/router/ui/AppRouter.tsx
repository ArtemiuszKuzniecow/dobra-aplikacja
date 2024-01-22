import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useRoutes } from "react-router-dom";
import { RouterConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
  const {t} = useTranslation()

  return (
    <div className="page-wrapper">
      <Suspense fallback={<div>{t("loading")}</div>}>
        {useRoutes(RouterConfig())}
      </Suspense>
    </div>
  );
};

export default AppRouter;
