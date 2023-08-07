import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {
   const taskList = tasks.map(task=>{
     return <Task task={task} category={task.category} key={task.text} onDelete={onDelete} text={task.text}/>
   })
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
