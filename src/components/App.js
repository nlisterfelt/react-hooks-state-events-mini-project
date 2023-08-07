import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [tasksToDisplay, setTasksToDisplay] = useState(TASKS)
  const [formData, setFormData]=useState({
    category: "Code",
    text: ""
  })

  function handleDelete(taskToDelete){
    const newTasks = tasks.filter(task=>task!==taskToDelete)
    setTasks(newTasks)
    setTasksToDisplay(newTasks)
  }
  function handleFilter(event){
    event.target.className = "selected"
    const filter = event.target.innerText
    if(filter==="All"){
      const newAllTasks = [...tasks]
      setTasksToDisplay(newAllTasks)
    } else {
      const newTasksToDisplay = tasks.filter(task=>task.category===filter)
      setTasksToDisplay(newTasksToDisplay)
    }
  }
  function handleFormChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  function handleTaskFormSubmit(event){
    event.preventDefault()
    const tasksPlusNew = [...tasks, formData]
    setTasks(tasksPlusNew)
    setTasksToDisplay(tasksPlusNew)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} onFormChange={handleFormChange}/>
      <TaskList tasks={tasksToDisplay} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
