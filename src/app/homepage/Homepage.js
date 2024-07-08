"use client";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Aboutus from "../../../components/Aboutus/aboutus";
import SubscirbeForm from "../../../components/SubscribeForm/SubscirbeForm";
import Services from "../../../components/Services/Services";
import SingleProductDetails from "../../../components/SingleProductDetails/SingleProductDetails";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./Homepage.css";
import ReviewForm from "../../../components/ReviewForm/ReviewForm";

export default function Homepage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [proddata, setproddata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch("https://dummyjson.com/products");
      const response = await query.json();
      setproddata(response.products);
    };
    getData();
  }, []);

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
                {proddata
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
            </Tab>
            <Tab eventKey="profile" title="THERMAL WITHOUT SLEEVE">
              <div className="row">
                {proddata
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
            </Tab>
            <Tab eventKey="longer-tab" title="TRITAN ROUND">
              <div className="row">
                {proddata
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
            <div className="main-image position-relative hoverme">
              <img
                src="images/Rectangle 23.png"
                className=""
                alt="Main Image"
              />
              <div className="text-overlay new-launch">New Launch</div>
            </div>
            <div className="side-images">
              <div className="position-relative hoverme">
                <img
                  src="images/Rectangle 24.png"
                  className=" img-1"
                  alt="Side Image 1"
                />
                <div className="text-overlay new-launch">New Launch</div>
              </div>
              <div className="d-flex stackimages">
                <div className="position-relative stackimages-2 stackimages-22 hoverme">
                  <img
                    src="images/Rectangle 25.png"
                    className="stackimages-2"
                    alt="stackimages-2"
                  />
                  <div className="text-overlay new-launch">New Launch</div>
                </div>
                <div className="position-relative stackimages-2 hoverme">
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
          <Aboutus />
        </div>
      </div>

      <section className="best-selling-product ">
        <h1
          className="display-2 my-4 pt-5 text-center"
          style={{ fontWeight: 400 }}
        >
          Our Collection
        </h1>
        <hr className="w-50 mx-auto mb-5" />

        <div className="container">
          <SingleProductDetails themeType="greenTheme" />
        </div>
      </section>

      <SubscirbeForm />

      <Services />

      <div className="secton-video py-md-5 my-md-4">
        <div className="row w-100 mx-auto justify-content-end align-items-center">
          <div className="col-md-5 text-center mb-5 mb-md-0 pe-md-5 me-md-5">
            <h2 className="display-7 my-4 text-center">KNOW MORE</h2>
            <h2 className="display-5 my-4 text-center">About Us</h2>
            <hr />
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry&apos;s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised.
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
          <h2 className="display-5 my-4 text-center">About Us</h2>

          <div className="row justify-content-between">
            <div className="col-7 col-md-6">
              <div className="d-flex align-items-end">
                <h3 className="display-5 my-0 text-center">4.5</h3>
                <div className="stars d-flex">
                  <div className="fullstar">★</div>
                  <div className="fullstar">★</div>
                  <div className="fullstar">★</div>
                  <div className="fullstar">★</div>
                  <div className="nostart">☆</div>
                </div>
                (20 Reviews)
              </div>
            </div>
            <div className="col-5 col-md-6 d-flex mt-3 mt-md-0 justify-content-md-end align-items-center">
              <Button variant="success" onClick={handleShow}>
                Write a Review
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Write your review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ReviewForm />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>

          <hr />

          <Slider className="mt-5" {...settings}>
            <div className="card">
              <div className="d-flex">
                <img
                  src="https://frostybro.com/wp-content/uploads/2023/09/ada-1.png"
                  alt="Akhil Reddy"
                />
                <div>
                  <h2>Akhil Reddy</h2>
                  <h4>Software Engineer At Recro</h4>
                  <div className="stars d-flex">
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="nostart">☆</div>
                  </div>
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
                  <div className="stars d-flex">
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="nostart">☆</div>
                  </div>
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
                  <div className="stars d-flex">
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="fullstar">★</div>
                    <div className="nostart">☆</div>
                  </div>
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
