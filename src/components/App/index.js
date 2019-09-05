import React from "react";
import "./style.css";
import Header from "../Header";
import OrderList from "../OrderList";

function App() {
  return (
    <div className="app">
      <Header />
      <OrderList />
    </div>
  );
}

export default App;
