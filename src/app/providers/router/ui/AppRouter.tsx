import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => (
  <div className="page-wrapper">
    <Suspense fallback={<PageLoader />}>
      {useRoutes(RouterConfig())}
    </Suspense>
  </div>
);

export default AppRouter;
