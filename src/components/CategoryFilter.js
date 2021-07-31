import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const buttons = categories.map(category => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button className={className} key={category} onClick={() => onSelectCategory(category)}>
        {category}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
