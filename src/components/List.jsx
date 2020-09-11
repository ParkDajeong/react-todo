import React from "react";
import ToDo from "./ToDo";

function List({ toDoList, setToDoList }) {
  return (
    <ul>
      {toDoList.length > 0 &&
        toDoList.map((toDo) => (
          <ToDo //
            key={toDo.id}
            {...toDo}
            toDoList={toDoList}
            setToDoList={setToDoList}
          />
        ))}
    </ul>
  );
}

export default List;
