import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./models/";
import { Provider } from "react-redux";
import withLocale from "./hocs/withLocale";

const WithLocalApp = withLocale(App);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WithLocalApp />
    </Provider>
  </React.StrictMode>,
);
