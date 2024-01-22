import { classNames } from "shared/lib/classNames";
import cls from "./PageLoader.module.scss";

export const PageLoader = () => {
  return (
    <div className={classNames(cls.pageLoader)}>
      <div className={classNames(cls.ldsSpinner)}>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        </div>
    </div>
  );
};
