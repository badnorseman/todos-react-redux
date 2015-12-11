import "babel-core/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { todoStore } from "./store";
import TodoApp from "./components/TodoApp";

render(
  <Provider store={todoStore}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
