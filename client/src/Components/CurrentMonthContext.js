import React, { createContext, useState } from "react";

export const MonthContext = createContext();

const CurrentMonthContext = ({ children }) => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);

  return (
    <MonthContext.Provider value={{month, setMonth}}>
      {children}
    </MonthContext.Provider>
  );
};

export default CurrentMonthContext;
