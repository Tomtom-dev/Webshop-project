import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
