import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Detail from "./pages/detail";
import Access from "./pages/access";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </Router>
  );
};


export default App;
