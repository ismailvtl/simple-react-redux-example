import React from "react";
import { render } from "react-dom";
import App from "./App";
import DisplayNameComponent from "./DisplayNameComponent";
import DisplayTitleComponent from "./DisplayTitleComponent";
import DisplayLocationComponent from "./DisplayLocationComponent";
import { Provider } from "react-redux";
import { createStore } from "redux";
import './style.css';

const initialState = {
  details: {}
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "SHOW_DETAILS":
      return{
        details: action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

const MainApp = () => (
  <Provider store={store}>
    <div className="container">
      <div>
        <h1>Simple React Redux Example</h1>
        <h2>An attempt to show the redux flow and share the store across multiple components</h2>
        <App />
        <DisplayNameComponent />
        <DisplayTitleComponent />
        <DisplayLocationComponent />
      </div>
    </div>
  </Provider>
);

render(<MainApp />, document.getElementById("root"));
