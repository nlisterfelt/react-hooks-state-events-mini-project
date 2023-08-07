import React from "react";

function Task({task, category, text, onDelete}) {
  return (
    <div className="task" >
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={e=>onDelete(task)}>X</button>
    </div>
  );
}

export default Task;
