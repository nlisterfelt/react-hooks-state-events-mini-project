import React from "react";

function CategoryFilter({categories, onFilter}) {
  const buttons = categories.map(item=>{
    return <button key={item} onClick={onFilter}>{item}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
