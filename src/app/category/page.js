"use client";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import "react-range-slider-input/dist/style.css";
import RangeSlider from "react-range-slider-input";
import ProductCard from "../../../components/ProductCard/ProductCard";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";

export default function Categories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };

  const [proddata, setproddata] = useState([]);
  const [catdata, setcategorydata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch("https://dummyjson.com/products");

      // https://dummyjson.com/products
      // https://jsonplaceholder.typicode.com/users

      const response = await query.json();
      setproddata(response.products);
    };
    getData();

    const getCatData = async () => {
      const catquery = await fetch("https://dummyjson.com/products");

      const catresponse = await catquery.json();
      setcategorydata(catresponse.products);
    };
    getCatData();
  }, []);

  return (
    <div>
      <section className="review-slider">
        <div className="container">
          <Slider {...settings}>
            {catdata
              .filter((item, i) => i < 4)
              .map((category, i) => (
                <CategoryCard
                  key={category.title}
                  categoryTitle={category.title}
                  id={category.id}
                  categoryImage={category.images}
                />
              ))}
          </Slider>
        </div>
      </section>
      <div className="allproductswithfilters py-5">
        <Container>
          <BreadCrumb />

          <Row className="w-100">
            <div className="col-md-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Availability</Accordion.Header>
                  <Accordion.Body>
                    <div className="collapsible__content">
                      <div className="checkbox-container">
                        <input className="checkbox" type="checkbox" />
                        <label htmlFor="filter.v.availability-1">
                          In stock (8)
                        </label>
                      </div>
                      <div className="checkbox-container">
                        <input
                          className="checkbox"
                          type="checkbox"
                          name="filter.v.availability"
                          id="filter.v.availability-2"
                          value="0 /"
                        />
                        <label htmlFor="filter.v.availability-2">
                          Out of stock (1)
                        </label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Color</Accordion.Header>
                  <Accordion.Body>
                    <div className="collapsible__content">
                      <div className="checkbox-container">
                        <input
                          className="checkbox"
                          type="checkbox"
                          name="filter.v.option.color"
                          id="filter.v.option.color-1"
                          value="Blue"
                        />
                        <label htmlFor="filter.v.option.color-1">
                          Blue (5)
                        </label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <RangeSlider />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-md-9">
              <div className="row">
                {/* {proddata.map((product, i) =>
                  product.availabilityStatus == "Low Stock" ? (
                    <ProductCard
                      key={i}
                      productImage={product.images[0]}
                      productTitle={product.title}
                      productMetaTitle={product.category}
                      productPrice={product.price + "$"}
                      id={product.id}
                    />
                  ) : (
                    <></>
                  )
                )} */}

                {proddata.map((product) => (
                  <div className="col-md-4">
                    <ProductCard
                      key={product}
                      productImage={product.images[0]}
                      productTitle={product.title}
                      productMetaTitle={product.category}
                      productPrice={product.price + "$"}
                      id={product.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
