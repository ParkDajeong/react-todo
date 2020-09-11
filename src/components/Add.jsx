import React, { useState, useRef } from "react";

function Add({ toDoList, setToDoList }) {
  const [toDo, setToDo] = useState("");
  const currentId = useRef(localStorage.length > 0 ? Number(localStorage.lastId) + 1 : 1);

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = currentId.current;
    const list = [{ id, text: toDo }, ...toDoList];
    setToDoList(list);
    localStorage.setItem("toDos", JSON.stringify(list));
    localStorage.setItem("lastId", id);
    currentId.current += 1;
    setToDo("");
  };

  // localStorage.clear();

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={toDo} onChange={onChange} />
      <button>+</button>
    </form>
  );
}

export default Add;
