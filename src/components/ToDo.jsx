import React from "react";

function ToDo({ id, text, toDoList, setToDoList }) {
  const deleteToDo = (e) => {
    const id = Number(e.target.parentNode.dataset.id);
    console.log(id);
    const newList = toDoList.filter((toDo) => toDo.id !== id);
    localStorage.setItem("toDos", JSON.stringify(newList));
    setToDoList(newList);
  };

  return (
    <>
      <li data-id={id}>
        <input type="checkbox" />
        <span>{text}</span>
        <button onClick={deleteToDo}>Delete</button>
      </li>
    </>
  );
}

export default ToDo;
