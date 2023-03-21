import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footers, Headers, Setting } from "./components";
import { Exchange, Home } from "./pages";

export default function App() {
  const [rates, setRates] = useState(1);
  // const [mode, setMode] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [page, setPage] = useState(localStorage.getItem('currentPage') || 'Home');

  useEffect(() => {
    localStorage.setItem('currentPage', page);
  }, [page]);

  // const handleSetMode = (newMode) => {
  //   setMode(newMode);
  // }

  return (
    <Router>
      <Headers 
        setPage={setPage} 
        page={page}
      />
      <Setting
        currencySymbol={currencySymbol}
        setCurrencySymbol={setCurrencySymbol}
        setRates={setRates}
        rates={rates}
        // mode={mode}
        // setMode={handleSetMode}
        setSymbol={setSymbol}
      />
      <Routes>
        <Route
          path="/"
          element={<Home currencySymbol={currencySymbol} rates={rates} symbol={symbol}/>}
        />
        <Route path="/exchange" element={<Exchange currencySymbol={currencySymbol} rates={rates} symbol={symbol}/>} />
      </Routes>
      <Footers />
    </Router>
  );
}

