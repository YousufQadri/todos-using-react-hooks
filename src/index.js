import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import Header from "./components/Header";

import "./styles.css";

const App = () => (
  <div className="App">
    <Header />
    <TodoList />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
