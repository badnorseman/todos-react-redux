import React from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import VisibleTodoList from "./VisibleTodoList";

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp
