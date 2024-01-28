import cls from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames";

export const Loader = () => {
  return (
    <div className={classNames(cls.ldsSpinner)}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
