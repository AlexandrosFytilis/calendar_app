import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Calendar } from "./Components/Calendar";
import { Days } from "./Components/Days";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
