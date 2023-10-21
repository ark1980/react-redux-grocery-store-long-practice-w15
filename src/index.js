import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { loadProduce } from "./store/produce";
import { addToCart } from "./store/cart";
import { removeFromCart } from "./store/cart";
import "./index.css";
import App from "./App";

function Root() {
  const store = configureStore();

  if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.loadProduce = loadProduce;
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
