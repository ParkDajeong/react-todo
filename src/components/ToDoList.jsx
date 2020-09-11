import React, { useState, useEffect } from "react";
import Add from "./Add";
import List from "./List";
import { Section } from "./ToDoList.style";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem("toDos"));
    toDos && setToDoList(toDos);
  }, []);

  return (
    <Section>
      <div>
        <Add toDoList={toDoList} setToDoList={setToDoList} />
        <List toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </Section>
  );
}

export default ToDoList;
