import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData]=useState({
    category: "Code",
    text: ""
  })

  function handleFormChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const categoriesNotAll=categories.filter(category=>category!=="All")
  const categoryOptions=categoriesNotAll.map(item=>{
    return <option key={item}>{item}</option>
  })

  return (
    <form className="new-task-form" onSubmit={event=>{event.preventDefault(); onTaskFormSubmit(formData)}}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
