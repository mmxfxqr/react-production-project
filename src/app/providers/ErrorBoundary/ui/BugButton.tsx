import React, { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./BugButton.module.scss";
import { Button } from "shared/ui/Button/Button";

interface BugButtonProps {
  className?: string;
}
//Компонент для тестирования Error Boundary
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const throwError = () => {
    setError(true);
  };
  useEffect(() => {
    if (error === true) {
      throw new Error();
    }
  }, [error]);
  return (
    <Button
      onClick={throwError}
      className={classNames(cls.BugButton, {}, [className])}
    >
      throw error
    </Button>
  );
};
