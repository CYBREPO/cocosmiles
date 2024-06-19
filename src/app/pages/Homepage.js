"use client";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  const data = await res.json();
  return { props: { productsData: data } };
};

const CarouselItem = styled.div`
  height: 21px;
  width: 21px;
  border-radius: 50%;
  background: black;
  position: absolute;
  top: -10px;
  right: -11px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
`;

export default function Homepage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const products = [
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Cap Fun Charm Thermos Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Cap Squeaker Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Animal Thermos Cup with Sleeve",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Puppet Fairy Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
  ];
  const products1 = [
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Cap Fun Charm Thermos Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Cap Squeaker Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Animal Thermos Cup with Sleeve",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Puppet Fairy Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
  ];
  const products2 = [
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Cap Fun Charm Thermos Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Cap Squeaker Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Animal Thermos Cup with Sleeve",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
    {
      productTitle: "COCOSMILE CUPS",
      productMetaTitle: "Coco Puppet Fairy Cup",
      productPrice: "$35.00",
      productOldPrice: "Nguyen",
      id: 1,
    },
  ];
  const services = [
    {
      serviceTitle: "FREE SHIPPING",
      serviceMetaTitle: "Free shipping and returns on all orders above $50+",

      id: 1,
    },
    {
      serviceTitle: "CUSTOMER SERVICE",
      serviceMetaTitle:
        "We Are Available Monday Through Friday From 08:00-17:30 To Answer Any Questions. Outside Of These Hours, We Will Return Your Call Within 1-2 Business Days.",

      id: 1,
    },
    {
      serviceTitle: "SECURE PAYMENT",
      serviceMetaTitle: "Your payment information is processed securely.",

      id: 1,
    },
    {
      serviceTitle: "CONTACT US",
      serviceMetaTitle:
        "Need to contact us? Just send us an Email at cocosmilecups@gmail.com.",

      id: 1,
    },
  ];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel className="bannerCarousel">
        <Carousel.Item>
          <img
            src="https://cocosmilecups.com/cdn/shop/files/Interchangeable_Sleeves_c3700988-6032-4ed6-8a4b-7c57909588ed.png?v=1716202929&width=3000"
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption>
            <div className="text-center mt-5">
              <button type="button" className="btn btn-lg btn-success">
                Shop Now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cocosmilecups.com/cdn/shop/files/11_ee80e962-f576-4145-8cde-1cb85515a430.png?v=1716202748&width=3000"
            className="d-block w-100"
            alt="..."
          />
          <Carousel.Caption>
            <div className="text-center mt-5">
              <button type="button" className="btn btn-lg btn-success">
                Shop Now
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="trending py-5">
        <div className="container">
          <h2
            className="display-5 my-4 text-center text-uppercase play-fair"
            style={{ fontWeight: 400 }}
          >
            Trending This Summer
          </h2>

          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="THERMAL WITH SLEEVE">
              <div className="row">
                {products?.map((product,i) => (
                  <ProductCard
                    key={i}
                    productTitle={product.productTitle}
                    productMetaTitle="Coco Puppet Fairy Cup"
                    productPrice="$29.00"
                    productOldPrice="$30.00"
                  />
                ))}
              </div>
            </Tab>
            <Tab eventKey="profile" title="THERMAL WITHOUT SLEEVE">
              <div className="row">
                {products1?.map((product,i) => (
                  <ProductCard
                    key={i}
                    productTitle={product.productTitle}
                    productMetaTitle="Coco Puppet Fairy Cup"
                    productPrice="$29.00"
                    productOldPrice="$30.00"
                  />
                ))}
              </div>
            </Tab>
            <Tab eventKey="longer-tab" title="TRITAN ROUND">
              <div className="row">
                {products2?.map((product,i) => (
                  <ProductCard
                    key={i}
                    productTitle={product.productTitle}
                    productMetaTitle="Coco Puppet Fairy Cup"
                    productPrice="$29.00"
                    productOldPrice="$30.00"
                  />
                ))}
              </div>
            </Tab>
          </Tabs>

          <div className="text-center ">
            <button type="button" className="btn btn-lg btn-success">
              View More
            </button>
          </div>
        </div>
      </section>

      <section className="latest-collection">
        <h2 className="display-7 my-4 text-center">CHECKOUT LATEST OF</h2>

        <h2 className="display-5 mb-4 text-center" style={{ fontWeight: 400 }}>
          Our Collection
        </h2>

        <hr className="w-50 mx-auto" />

        <p className="text-center mb-5">
          Simply dummy text of the printing and typesetting industry. <br />{" "}
          Lorem Ipsum has been
        </p>

        <div className="container">
          <div className="d-flex">
            <div className="main-image position-relative">
              <img
                src="images/Rectangle 23.png"
                className=""
                alt="Main Image"
              />
              <div className="text-overlay new-launch">New Launch</div>
            </div>
            <div className="side-images">
              <div className="position-relative">
                <img
                  src="images/Rectangle 24.png"
                  className=" img-1"
                  alt="Side Image 1"
                />
                <div className="text-overlay new-launch">New Launch</div>
              </div>
              <div className="d-flex stackimages">
                <div className="position-relative stackimages-2 stackimages-22">
                  <img
                    src="images/Rectangle 25.png"
                    className="stackimages-2"
                    alt="stackimages-2"
                  />
                  <div className="text-overlay new-launch">New Launch</div>
                </div>
                <div className="position-relative stackimages-2">
                  <img
                    src="images/Rectangle 26.png"
                    className="stackimages-3"
                    alt="stackimages-2"
                  />
                  <div className="text-overlay new-launch">New Launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="secton-video py-5 my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img
                src="https://cocosmilecups.com/cdn/shop/files/Screenshot_74_ec7a64e5-0507-44ab-81ec-f17b32eb9a63_800x.png?v=1716312432"
                className="img-fluid"
                alt=""
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="col-md-5 text-center">
              <h2 className="display-7 my-4 text-center">KNOW MORE</h2>
              <h2 className="display-5 my-4 text-center">About Us</h2>
              <hr />
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was
                popularised.
              </p>
              <button type="button" className="btn btn-lg btn-success">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="best-selling-product ">
        <h1 className="display-2 my-4 pt-5 text-center" style={{ fontWeight: 400 }}>
          Our Collection
        </h1>
        <hr className="w-50 mx-auto mb-5" />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                id="carouselId"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="row">
                  <div className="col-md-2">
                    <ol className="carousel-indicators">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-details">
                <h1>Coco Cap Fun Charm Thermos Cup</h1>
                <p className="price">$35.00</p>
                <p className="installments">
                  <span
                    className="shopify-installments__content"
                    id="shopify-installments-content"
                  >
                    Pay in 4 interest-free installments for orders over
                    <b>$50.00</b> with{" "}
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shop-pay-logo"
                      viewBox="0 0 341 81"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M227.297 0C220.448 0 214.896 5.47237 214.896 12.2229V67.8125C214.896 74.563 220.448 80.0354 227.297 80.0354H328.357C335.206 80.0354 340.758 74.563 340.758 67.8125V12.2229C340.758 5.47237 335.206 0 328.357 0H227.297ZM244.999 55.8917V41.8012H253.993C262.21 41.8012 266.579 37.2604 266.579 30.379C266.579 23.4976 262.21 19.3782 253.993 19.3782H239.205V55.8917H244.999ZM244.999 24.8084H252.663C257.982 24.8084 260.595 26.9617 260.595 30.5663C260.595 34.1708 258.077 36.3242 252.9 36.3242H244.999V24.8084ZM276.795 56.6407C281.212 56.6407 284.109 54.7214 285.439 51.4445C285.819 55.0959 288.052 56.9684 292.896 55.7044L292.944 51.819C290.996 52.0063 290.616 51.3041 290.616 49.2912V39.7415C290.616 34.124 286.864 30.8003 279.93 30.8003C273.09 30.8003 269.148 34.1708 269.148 39.8819H274.468C274.468 37.1668 276.415 35.5284 279.835 35.5284C283.444 35.5284 285.107 37.0732 285.059 39.7415V40.9586L278.932 41.614C272.045 42.3629 268.246 44.9376 268.246 49.4316C268.246 53.1298 270.905 56.6407 276.795 56.6407ZM277.982 52.4276C274.99 52.4276 273.803 50.836 273.803 49.2443C273.803 47.091 276.273 46.1079 281.117 45.5462L284.917 45.1249C284.679 49.2443 281.877 52.4276 277.982 52.4276ZM310.537 57.7174C308.115 63.5221 304.22 65.2541 298.141 65.2541H295.528V60.4793H298.331C301.655 60.4793 303.27 59.4494 305.028 56.5002L294.246 31.5493H300.23L307.925 49.7593L314.764 31.5493H320.606L310.537 57.7174Z"
                        fill="rgb(90, 49, 244)"
                      ></path>
                      <path
                        d="M29.5136 35.1798C21.5797 33.4835 18.0451 32.8197 18.0451 29.8064C18.0451 26.9722 20.4371 25.5604 25.221 25.5604C29.4282 25.5604 32.5036 27.3726 34.7674 30.9232C34.9382 31.1972 35.2906 31.292 35.5789 31.1445L44.506 26.6983C44.8263 26.5402 44.9438 26.1399 44.7623 25.8343C41.0569 19.5022 34.2121 16.0358 25.1996 16.0358C13.3574 16.0358 6 21.7885 6 30.9338C6 40.648 14.9591 43.1029 22.9038 44.7992C30.8484 46.4955 34.3936 47.1592 34.3936 50.1725C34.3936 53.1858 31.8095 54.6082 26.6518 54.6082C21.8893 54.6082 18.3548 52.4589 16.2191 48.2866C16.059 47.981 15.6852 47.8546 15.3756 48.0127L6.46985 52.364C6.16017 52.5221 6.03203 52.8908 6.19221 53.2069C9.72673 60.2134 16.9773 64.1538 26.6625 64.1538C38.996 64.1538 46.4494 58.496 46.4494 49.0663C46.4494 39.6365 37.4476 36.8972 29.5136 35.2009V35.1798Z"
                        fill="rgb(90, 49, 244)"
                      ></path>
                      <path
                        d="M77.3525 16.0358C72.291 16.0358 67.8168 17.8059 64.6026 20.9561C64.3997 21.1458 64.0687 21.0088 64.0687 20.7349V0.621625C64.0687 0.273937 63.791 0 63.4387 0H52.2692C51.9168 0 51.6391 0.273937 51.6391 0.621625V63.0476C51.6391 63.3952 51.9168 63.6692 52.2692 63.6692H63.4387C63.791 63.6692 64.0687 63.3952 64.0687 63.0476V35.6644C64.0687 30.3754 68.1798 26.319 73.7219 26.319C79.2639 26.319 83.279 30.2911 83.279 35.6644V63.0476C83.279 63.3952 83.5566 63.6692 83.909 63.6692H95.0785C95.4309 63.6692 95.7085 63.3952 95.7085 63.0476V35.6644C95.7085 24.1591 88.0628 16.0464 77.3525 16.0464V16.0358Z"
                        fill="rgb(90, 49, 244)"
                      ></path>
                      <path
                        d="M118.389 14.2552C112.324 14.2552 106.622 16.0779 102.542 18.7224C102.265 18.9016 102.169 19.2703 102.34 19.5548L107.262 27.8466C107.444 28.1416 107.828 28.247 108.127 28.0679C111.224 26.2241 114.769 25.2653 118.389 25.2864C128.138 25.2864 135.303 32.0716 135.303 41.0377C135.303 48.6763 129.569 54.3342 122.297 54.3342C116.371 54.3342 112.26 50.9311 112.26 46.1266C112.26 43.3767 113.445 41.122 116.531 39.5311C116.851 39.3625 116.969 38.9727 116.777 38.6671L112.132 30.9126C111.982 30.6598 111.662 30.5439 111.373 30.6492C105.148 32.925 100.78 38.4037 100.78 45.7579C100.78 56.8839 109.761 65.1863 122.287 65.1863C136.916 65.1863 147.434 55.1876 147.434 40.8481C147.434 25.476 135.197 14.2446 118.368 14.2446L118.389 14.2552Z"
                        fill="rgb(90, 49, 244)"
                      ></path>
                      <path
                        d="M180.098 15.9515C174.449 15.9515 169.409 18.006 165.725 21.6304C165.522 21.8306 165.191 21.6831 165.191 21.4092V17.0473C165.191 16.6996 164.914 16.4256 164.561 16.4256H153.68C153.328 16.4256 153.05 16.6996 153.05 17.0473V79.3784C153.05 79.7261 153.328 80 153.68 80H164.849C165.202 80 165.48 79.7261 165.48 79.3784V58.9385C165.48 58.6645 165.811 58.5276 166.013 58.7067C169.687 62.0782 174.545 64.0485 180.109 64.0485C193.211 64.0485 203.43 53.5862 203.43 39.9947C203.43 26.4032 193.2 15.941 180.109 15.941L180.098 15.9515ZM177.995 53.4914C170.541 53.4914 164.892 47.6439 164.892 39.9104C164.892 32.177 170.53 26.3295 177.995 26.3295C185.459 26.3295 191.086 32.0822 191.086 39.9104C191.086 47.7387 185.533 53.4914 177.984 53.4914H177.995Z"
                        fill="rgb(90, 49, 244)"
                      ></path>
                    </svg>
                  </span>
                </p>
                <p className="description">
                  Description Simply Dummy Text Of The Printing And Typesetting
                  Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
                  Text Ever Since The 1500
                </p>
                <div className="reviews">
                  <span>★★★★☆</span> <a href="#">2 Reviews</a>
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
                        <img src="images/Group 36.png" alt="" className="w-50" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="style-options">
                        <label htmlFor="style">Style :</label>
                        <img
                          src="images/Group 37.png"
                          alt=""
                          style={{ width: "35%" }}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="quantity">
                        <label htmlFor="quantity">Quantity :</label>
                        <img
                          src="images/Group 33.png"
                          alt=""
                          style={{ width: "25%" }}
                        />
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
      </section>

      <section>
        <div className="form-popup">
       
          <div className="popup">
            <h2>SUBSCRIBE &amp; GET 10% OFF</h2>
            <p>Promotions, New Products And Sales. Directly To Your Inbox.</p>
            <Form>
              <Form.Group
                className="d-flex align-items-center"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="me-2"
                />{" "}
                <button type="submit">Subscribe</button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>

      <section>
        <div className="features-container">
          <div className="container">
            <div className="row">
              {services?.map((service) => (
                <div className="col-md-3">
                  <div className="feature">
                    <img
                      src="images/icon1.png"
                      alt="Free Shipping"
                      className="icon"
                    />
                    <h3>{service.serviceTitle}</h3>
                    <p>{service.serviceMetaTitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="secton-video py-5 my-4">
        <div className="row w-100 mx-auto justify-content-end align-items-center">
          <div className="col-md-5 text-center pe-5 me-5">
            <h2 className="display-7 my-4 text-center">KNOW MORE</h2>
            <h2 className="display-5 my-4 text-center">About Us</h2>
            <hr />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised.
            </p>
            <button type="button" className="btn btn-lg btn-success">
              Read More
            </button>
          </div>
          <div className="col-md-5">
            <img
              src="images/screenshot-cocosmilecups.com-2024.06.17-13_56_07.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="review-slider">
        <div className="container">
          <Slider {...settings}>
            <div className="card">
              <div className="d-flex">
                <img
                  src="https://frostybro.com/wp-content/uploads/2023/09/ada-1.png"
                  alt="Akhil Reddy"
                />
                <div>
                  <h2>Akhil Reddy</h2>
                  <h4>Software Engineer At Recro</h4>
                  <div className="stars">★★★★☆</div>
                </div>
              </div>
              <p>
                <span className="quote">“</span>Bosscoder academy made me a
                complete software engineer. I was working in Infosys & was
                struggling to crack the product companies due to lack of
                understanding in DSA and system design.
                <span className="quote">”</span>
              </p>
              <a href="#" className="read-more">
                read more
              </a>
            </div>
            <div className="card">
              <div className="d-flex">
                <img
                  src="https://frostybro.com/wp-content/uploads/2023/09/ada-1.png"
                  alt="Akhil Reddy"
                />
                <div>
                  <h2>Akhil Reddy</h2>
                  <h4>Software Engineer At Recro</h4>
                  <div className="stars">★★★★☆</div>
                </div>
              </div>
              <p>
                <span className="quote">“</span>Bosscoder academy made me a
                complete software engineer. I was working in Infosys & was
                struggling to crack the product companies due to lack of
                understanding in DSA and system design.
                <span className="quote">”</span>
              </p>
              <a href="#" className="read-more">
                read more
              </a>
            </div>
            <div className="card">
              <div className="d-flex">
                <img
                  src="https://frostybro.com/wp-content/uploads/2023/09/ada-1.png"
                  alt="Akhil Reddy"
                />
                <div>
                  <h2>Akhil Reddy</h2>
                  <h4>Software Engineer At Recro</h4>
                  <div className="stars">★★★★☆</div>
                </div>
              </div>
              <p>
                <span className="quote">“</span>Bosscoder academy made me a
                complete software engineer. I was working in Infosys & was
                struggling to crack the product companies due to lack of
                understanding in DSA and system design.
                <span className="quote">”</span>
              </p>
              <a href="#" className="read-more">
                read more
              </a>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}
