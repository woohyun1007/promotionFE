import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ON from "./다시,ON/ON";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ON/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
