import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import ContextProvider from "./components/context/GlobalContext";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
