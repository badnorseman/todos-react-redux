import { combineReducers } from "redux";
import { todos } from "./todos";
import { visibilityFilter } from "./visibilityFilter";

export const todoApp = combineReducers({
  todos,
  visibilityFilter
});
