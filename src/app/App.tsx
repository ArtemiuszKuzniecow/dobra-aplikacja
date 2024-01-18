import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";

const Header = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default Header;
