import React from "react";

function NewTaskForm({categories, onFormChange, onTaskFormSubmit}) {
  const categoriesNotAll=categories.filter(category=>category!=="All")
  const categoryOptions=categoriesNotAll.map(item=>{
    return <option key={item}>{item}</option>
  })
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={onFormChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onFormChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
