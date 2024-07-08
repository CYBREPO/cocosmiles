"use client";
import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";

import SingleProductDetails from "../../../components/SingleProductDetails/SingleProductDetails";
import "./singleProductPage.css";
import ProductCard from "../../../components/ProductCard/ProductCard";

const Singleproductdetails = () => {
  const [proddata, setproddata] = useState({});
  const [prodlist, setprodlist] = useState([]);

  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const prodquery = await fetch("https://dummyjson.com/products");
      const productresponse = await prodquery.json();
      setprodlist(productresponse.products);

      const query = await fetch("https://dummyjson.com/products/1");
      const response = await query.json();
      setproddata(response);
      setreviews(response["reviews"]);
    };

    getData();
  }, []);



  return (
    <div className="container">
      <>
        <SingleProductDetails
          themeType="lightTheme"
          singleproducttitle={proddata["title"]}
          singleproductprice={proddata["price"]}
          singleproductdescription={proddata["description"]}
          singleproductcapacity={proddata["dimensions.depth"]}
          singleproductstyles="Straw Cup"
        />
      </>
      <Tabs defaultActiveKey="Description" className="mb-3 mt-5">
        <Tab eventKey="Description" title="Description">
          <p>{proddata["description"]}</p>
        </Tab>
        <Tab eventKey="Reviews" title={"Reviews" + "(" + reviews.length + ")"}>
          {reviews.map((review) => (
            <div className="comment d-flex my-5">
              <div className="comment-header w-100">
                <div className="row w-100">
                  <div className="col-md-1">
                    <div className="avatar">T</div>
                  </div>
                  <div className="col-md-2">
                    <div className="user-details">
                      <span className="name">{review.reviewerName}</span>
                      <span className="location">NYC, USA</span>
                      <div className="rating">
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <span className="time">{review.date}</span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="comment-text">{review.comment}</div>
                    <div className="replies">
                      <a href="#">Replies (1)</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Tab>
        <Tab eventKey="faq" title="FAQ" className="mb-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>The FAQ Question Goes here</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>
      </Tabs>

      <h2 className="display-5 mb-4 text-center" style={{ fontWeight: 400 }}>
        You May Also Like
      </h2>

      <hr className="w-50 mx-auto" />

      <div className="row mb-4">
        {prodlist
          .filter((item, i) => i < 4)
          .map((product, i) => (
            <ProductCard
              key={i}
              productImage={product.images[0]}
              productTitle={product.title}
              productMetaTitle={product.category}
              productPrice={product.price + "$"}
              id={product.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Singleproductdetails;
