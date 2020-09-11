import React from "react";
import ToDoList from "./components/ToDoList";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ToDoList />
    </div>
  );
}

export default App;
