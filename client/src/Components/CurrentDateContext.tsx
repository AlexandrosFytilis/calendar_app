import React, { createContext, useState, ReactNode } from "react";
import { TODAYDATA } from "./Data";

export interface DateContextProps {
  month: number | null,
  setMonth: React.Dispatch<React.SetStateAction<number | null>>,
  year: number | null,
  setYear: React.Dispatch<React.SetStateAction<number | null>>,
}

export const DateContext = createContext<DateContextProps>({
  month: null,
  setMonth: Number,
  year: null,
  setYear: Number,
});

interface Props {
  children: ReactNode,
}

const CurrentDateContext = ({ children }: Props) => {
  const date = new Date();

  const [month, setMonth] = useState<number | null>(date.getMonth() + 1);
  const [year, setYear] = useState<number | null>(date.getFullYear());

  return (
    <DateContext.Provider value={{month, setMonth, year, setYear}}>
      {children}
    </DateContext.Provider>
  );
};

export default CurrentDateContext;
