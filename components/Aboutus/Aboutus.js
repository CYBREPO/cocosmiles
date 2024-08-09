import React from "react";

function Aboutus() {
  return (
    <div>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <img
            src="https://cocosmilecups.com/cdn/shop/files/Screenshot_74_ec7a64e5-0507-44ab-81ec-f17b32eb9a63_800x.png?v=1716312432"
            className="img-fluid"
            alt=""
            style={{ borderRadius: "30px" }}
          />
        </div>
        <div className="col-md-5 text-start">
          <h2 className="display-5 my-4 text-start">About Us</h2>
          <hr />
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised.
          </p>
          <button type="button" className="btn btn-lg btn-success">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
