import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footers, Headers, Setting } from "./components";
import { Home, Market } from "./pages";

export default function App() {
  const [rates, setRates] = useState();
  const [mode, setMode] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  const handleSetMode = (newMode) => {
    setMode(newMode);
  }

  return (
    <Router>
      <Headers />
      <Setting
        currencySymbol={currencySymbol}
        setCurrencySymbol={setCurrencySymbol}
        setRates={setRates}
        // mode={mode}
        // setMode={handleSetMode}
        setSymbol={setSymbol}
      />
      <Routes>
        <Route
          path="/"
          element={<Home currencySymbol={currencySymbol} rates={rates} symbol={symbol} />}
        />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Footers />
    </Router>
  );
}

