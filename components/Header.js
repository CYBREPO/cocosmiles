//page.js
"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from 'styled-components/macro';


export default function Header() {
  const Image = styled.img`
    width: 300px;
  `;
  const Cartcount = styled.div`
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
  return (
    <div>
      {/* navbar */}
      <div className="top-navbar">
        <div className="container">
          <img src={"/images/Group 31.png"} alt="" style={{ width: "35%" }} />
          <img src={"/images/Group 30.png"} alt="" style={{ width: "15%" }} />
        </div>
      </div>

      <Navbar bg="white" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={"/images/logo.png"} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="active">
              How to
            </Nav.Link>
            <Nav.Link href="#features">Categories</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
          </Nav>
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
            <Cartcount>0</Cartcount>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}
