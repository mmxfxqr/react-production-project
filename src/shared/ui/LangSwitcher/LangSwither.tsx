import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwither.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "../Button/Button";

interface LangSwitherProps {
  className?: string;
  short?: boolean
}

export const LangSwither = ({ className, short }: LangSwitherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls.LangSwither, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short? 'Короткий язык':"Язык")}
    </Button>
  );
};
