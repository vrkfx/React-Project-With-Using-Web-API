
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from './components/navbar';
import Home from './components/home';
import Weather from './components/weather'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
