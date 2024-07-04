import React from "react";
import "./CategoryCard.css";

// https://dummyjson.com/categorys
function CategoryCard({
  categoryTitle,
  id,
  categoryImage,
}) {
  return (
  
      <div className="categorycard" key={id}>
        <img className="w-100" src={categoryImage} />
        <h2 className="categorycardCaption">
          <a href="">{categoryTitle}</a>
        </h2>
      </div>
 
  );
}

export default CategoryCard;
