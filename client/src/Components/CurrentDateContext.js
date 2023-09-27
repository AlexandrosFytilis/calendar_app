import React, { createContext, useState } from "react";

export const DateContext = createContext();

const CurrentDateContext = ({ children }) => {
  const date = new Date();

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear())

  return (
    <DateContext.Provider value={{month, setMonth, year, setYear}}>
      {children}
    </DateContext.Provider>
  );
};

export default CurrentDateContext;
