//page.js
"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

export default function Header() {
  return (
    <div>
      {/* navbar */}
      <div className="top-navbar">
        <div className="container">
          <div className="row w-100 mx-auto justify-content-between align-items-center">
            <div className="col-7">
              <Carousel
                className="bannerCarousel text-center w-md-75"
                indicators={false}
                fade={true}
              >
                <Carousel.Item className="text-white">
                  Offer Messages Going on Here!
                </Carousel.Item>
                <Carousel.Item className="text-white">
                  Offer Going on Here!
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-5 d-flex justify-content-end">
              <img
                src={"images/Group 30.png"}
                alt=""
                className="featureoffer"
              />
            </div>
          </div>
        </div>
      </div>

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="d-flex justify-content-between">
            <Navbar.Brand href="/">
              {" "}
              <Image src={"images/logo.png"} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="pe-0"
            />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/category">
                Category
              </Link>
              <Link className="nav-link" href="/shop">
                Shop
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="white" data-bs-theme="light" className="pt-0 pb-3">
        <Container className="justify-content-end">
          <div className="search-container">
            <form action="/search" method="get">
              <input
                className="search expandright"
                id="searchright"
                type="search"
                name="q"
                placeholder="What You Are Looking For?"
              />
              <label className="button searchbutton" htmlFor="searchright">
                <span className="mglass">&#9906;</span>
              </label>
            </form>
          </div>

          <Nav.Link>
            <svg
              focusable="false"
              width="20"
              height="16"
              className="icon icon--header-email   "
              viewBox="0 0 20 16"
            >
              <path
                d="M19 4l-9 5-9-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
              <path
                stroke="currentColor"
                fill="none"
                strokeWidth="1.2"
                d="M1 1h18v14H1z"
              ></path>
            </svg>
          </Nav.Link>

          <Nav.Link className="mx-3">
            <svg
              focusable="false"
              width="18"
              height="17"
              className="icon icon--header-customer   "
              viewBox="0 0 18 17"
            >
              <circle
                cx="9"
                cy="5"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              ></circle>
              <path
                d="M1 17v0a4 4 0 014-4h8a4 4 0 014 4v0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
            </svg>
          </Nav.Link>

          <Nav.Link className="position-relative">
            <svg
              focusable="false"
              width="21"
              height="20"
              className="icon icon--header-shopping-cart   "
              viewBox="0 0 21 20"
            >
              <path
                d="M0 1H4L5 11H17L19 4H8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
              <circle
                cx="6"
                cy="17"
                r="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              ></circle>
              <circle
                cx="16"
                cy="17"
                r="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              ></circle>
            </svg>
            <span className="cartcount">0</span>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}
