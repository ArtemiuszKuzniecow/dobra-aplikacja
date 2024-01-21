import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();
  return (
    <Suspense fallback="loading">
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
