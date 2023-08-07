import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
  const buttons = categories.map(category=>{
    const classN = category === selectedCategory ? "selected" : null;
    return(
      <button className={classN} key={category} onClick={()=>onSelectedCategory(category)}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
