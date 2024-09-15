import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Qucalc from "./pages/Qu";
import Rucalc from "./pages/Ru";
import Home from "./pages/Home";
import Qurumus from "./pages/QuRumus";
import Rurumus from "./pages/RuRumus";

function App() {
  return (
    <div className="m-5 w-auto flex flex-col items-center justify-center">
      <div className="flex flex-col w-full max-w-lg border-2 shadow-xl border-black bg-yellow-400 rounded-3xl p-4 border-b-8 border-r-8">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qu" element={<Qucalc />} />
            <Route path="/ru" element={<Rucalc />} />
            <Route path="/qurumus" element={<Qurumus/>}/>
            <Route path="/rurumus" element={<Rurumus/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
