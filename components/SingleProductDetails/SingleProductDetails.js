"use client";

import React, { useState } from "react";
import "./SingleProductDetails.css";

// https://dummyjson.com/categorys
function SingleProductDetails({
  themeType,
  singleproducttitle,
  singleproductprice,
  singleproductdescription,
  singleproductcapacity,
  singleproductstyles,
  id
}) {
  const [count, setCount] = useState(0);

  function incremenCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }
  return (
    <div className="single-product-details" key={id}>
      <div className="row">
        <div className="col-md-6">
          <div
            id="carouselId"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="row">
              <div className="col-md-2">
                <ol className="carousel-indicators d-none d-md-block">
                  <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="First slide"
                  >
                    <img
                      src="https://cocosmilecups.com/cdn/shop/files/received_619201726824876_600x.jpg?v=1718022519"
                      className="d-block w-100"
                      alt=""
                    />
                  </li>
                  <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="1"
                    aria-label="Second slide"
                  >
                    <img
                      src="https://cocosmilecups.com/cdn/shop/files/received_619201726824876_600x.jpg?v=1718022519"
                      className="d-block w-100"
                      alt=""
                    />
                  </li>
                </ol>
              </div>
              <div className="col-md-10">
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      src="https://cocosmilecups.com/cdn/shop/files/received_619201726824876_600x.jpg?v=1718022519"
                      className="d-block w-100"
                      alt=""
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Title</h3>
                      <p>Description</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://cocosmilecups.com/cdn/shop/files/FCFB1DFB-E116-4EF4-8C6E-D8A2445B63AD_600x.jpg?v=1718022519"
                      className="d-block w-100"
                      alt=""
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Title</h3>
                      <p>Description</p>
                    </div>
                  </div>
                </div>

                <ol className="carousel-indicators small-singprod-indicators d-flex d-md-none">
                  <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="First slide"
                  >
                    <img
                      src="https://cocosmilecups.com/cdn/shop/files/received_619201726824876_600x.jpg?v=1718022519"
                      className="d-block w-100"
                      alt=""
                    />
                  </li>
                  <li
                    data-bs-target="#carouselId"
                    data-bs-slide-to="1"
                    aria-label="Second slide"
                  >
                    <img
                      src="https://cocosmilecups.com/cdn/shop/files/received_619201726824876_600x.jpg?v=1718022519"
                      className="d-block w-100"
                      alt=""
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={
              "product-details " +
              (themeType == "lightTheme" ? "lightTheme" : "darkTheme")
            }
          >
            <h1>{singleproducttitle}</h1>
            <p className="price">$ {singleproductprice}</p>
            <p className="installments">
              <span
                className="shopify-installments__content"
                id="shopify-installments-content"
              >
                Pay in 4 interest-free installments for orders over
                <b>$50.00</b> with{" "}
                <img
                  src={"/images/shop.svg"}
                  className="footer-logo"
                  alt=""
                  width={80}
                />
              </span>
            </p>
            <p className="description">{singleproductdescription}</p>
            <div className="reviews">
              <div className="stars d-flex">
                <div className="fullstar">★</div>
                <div className="fullstar">★</div>
                <div className="fullstar">★</div>
                <div className="fullstar">★</div>
                <div className="nostart">☆</div>
              </div>
            </div>
            <div className="stock-status">In Stock</div>
            <div className="options">
              <div className="row">
                <div className="col-6">
                  <div className="color-options">
                    <label htmlFor="color">Color :</label>
                    <div className="color-buttons">
                      <button className="color white" title="White"></button>
                      <button className="color blue" title="Blue"></button>
                      <button className="color orange" title="Orange"></button>
                      <button className="color pink" title="Pink"></button>
                      <button className="color purple" title="Purple"></button>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="capacity-options">
                    <label htmlFor="capacity">Capacity :</label>
                    <div className="capsule">{singleproductcapacity}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="style-options">
                    <label htmlFor="style">Style :</label>
                    <div className="capsule">{singleproductstyles}</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="quantityAdder">
                    <label htmlFor="quantity">Quantity :</label>

                    <span className="cartquantity">
                      <button onClick={decrementCount}>-</button>
                      {count}
                      <button onClick={incremenCount}>+</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="buttons">
              <button className="add-to-cart">Add To Cart</button>
              <button className="buy-now">Buy With Shopay</button>
            </div>
            <div className="more-payment">
              <a href="#">More Payment Options</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetails;
