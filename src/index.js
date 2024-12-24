import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./components";
import { FilterProvider } from "./context";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <CartProvider>
      <FilterProvider>
        
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"} />
        <App />
        
      </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
