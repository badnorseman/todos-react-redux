import "babel-core/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import todoStore from "./store";

render(
  <Provider store={todoStore}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
