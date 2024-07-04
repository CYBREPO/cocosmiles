import React from "react";

function ServiceCard({
  serviceTitle,
  serviceMetaTitle,
  id
}) {
  return (
    <>
      <div className="col-md-3">
        <div className="feature">
          <img src={`images/icon${id+1}.png`} alt="Free Shipping" className="icon" />
          <h3>{serviceTitle}</h3>
          <p>{serviceMetaTitle}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
