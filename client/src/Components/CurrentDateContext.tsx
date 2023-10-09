import React, { createContext, useState, ReactNode } from "react";

interface DateContextProps {
  month: Number | null,
  setMonth: React.Dispatch<React.SetStateAction<Number | null>>,
  year: Number | null,
  setYear: React.Dispatch<React.SetStateAction<Number | null>>,
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

  const [month, setMonth] = useState<Number | null>(date.getMonth() + 1);
  const [year, setYear] = useState<Number | null>(date.getFullYear());

  return (
    <DateContext.Provider value={{month, setMonth, year, setYear}}>
      {children}
    </DateContext.Provider>
  );
};

export default CurrentDateContext;
