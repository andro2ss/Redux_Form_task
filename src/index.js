import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { compose, createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";
import "./style/main.scss";

const store = createStore(
  allReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
