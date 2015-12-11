import { createStore } from "redux";
import { todoApp } from "../reducers";

export const todoStore = createStore(todoApp);
