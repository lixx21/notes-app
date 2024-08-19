import React from 'react'
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

function App() {

  return (
    <BrowserRouter>
    <div className='App bg-background bg-cover min-h-screen'>
        <Home />
    </div>
    </BrowserRouter>
  );
}

export default App
