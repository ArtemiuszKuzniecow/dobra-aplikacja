import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

export const Loader = () => (
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
