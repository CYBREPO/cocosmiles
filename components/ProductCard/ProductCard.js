"use client";
import React from "react";
import "./ProductCard.css";
import { useRouter } from "next/navigation";

// https://dummyjson.com/products
function ProductCard({
  productTitle,
  productMetaTitle,
  productPrice,
  colors = ["green", "yellow", "pink"],
  id,
  productImage,
}) {
  return (
    <React.Fragment key={id}>
      <a
        href={`/singleProduct/?id=${id}`}
        className="product-card text-black text-decoration-none"
      >
        {/* <div className="save-tag">SAVE 3%</div> */}
        <img src={productImage} alt="Coco Puppet Fairy Cup" />
        <div className="product-title">
          <b className="d-block mb-2 text-uppercase">{productTitle}</b>
          <p className="text-lead text-capitalize">{productMetaTitle}</p>
        </div>
        <div className="price">{productPrice}</div>
        <div className="color-options">
          {colors.map((color, i) => (
            <span key={i} className={color}></span>
          ))}
        </div>
      </a>
    </React.Fragment>
  );
}

export default ProductCard;
