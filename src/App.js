import React from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="App">
      <NavBar/>
      
    </div>
  );
}

export default App;
