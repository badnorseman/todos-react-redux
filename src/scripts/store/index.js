import { createStore } from "redux";
import todoApp from "../reducers";

const todoStore = createStore(todoApp);

export default todoStore;
