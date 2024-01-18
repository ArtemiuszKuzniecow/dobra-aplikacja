import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { RouterConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      {useRoutes(RouterConfig())}
    </Suspense>
  );
};

export default AppRouter;
