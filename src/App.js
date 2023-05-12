
import React from "react";
import { Routes, Route } from "react-router-dom";

import Mov from './mov'
import MovCreate from "./movCreate"
import MovUpdate from "./movUpdate"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mov />} />
        <Route path='/movCreate' element={<MovCreate />} />
        <Route path='/movUpdate/:number' element={<MovUpdate />} />
      </Routes>
    </div>
  );
}