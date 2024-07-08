import React from "react";
import "./ProductCard.css";

// https://dummyjson.com/products
function ProductCard({
  productTitle,
  productMetaTitle,
  productPrice,
  colors = ["green", "yellow", "pink"],
  id,
  productImage
}) {

  return (
    <React.Fragment key={ProductCard.id}>
      <div className="col-6 col-md-3" key={ProductCard.id}>
        <div className="product-card">
          {/* <div className="save-tag">SAVE 3%</div> */}
          <img
            src={productImage}
            alt="Coco Puppet Fairy Cup"
          />
          <div className="product-title">
            <b className="d-block mb-2">{productTitle}</b>
            {productMetaTitle}
          </div>
          <div className="price">{productPrice}</div>
          <div className="color-options">
            {colors.map((color, i) => (
              <span key={i} className={color}></span>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductCard;