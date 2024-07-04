import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

function Services() {
  const services = [
    {
      servicesTitle: "FREE SHIPPING",
      servicesMetaTitle: "Free shipping and returns on all orders above $50+",

      id: 1,
    },
    {
      servicesTitle: "CUSTOMER SERVICE",
      servicesMetaTitle:
        "We Are Available Monday Through Friday From 08:00-17:30 To Answer Any Questions. Outside Of These Hours, We Will Return Your Call Within 1-2 Business Days.",

      id: 1,
    },
    {
      servicesTitle: "SECURE PAYMENT",
      servicesMetaTitle: "Your payment information is processed securely.",

      id: 1,
    },
    {
      servicesTitle: "CONTACT US",
      servicesMetaTitle:
        "Need to contact us? Just send us an Email at cocosmilecups@gmail.com.",

      id: 1,
    },
  ];

  return (
    <section>
      <div className="features-container">
        <div className="container">
          <div className="row">
            {services?.map((service, l) => (
              <ServiceCard   serviceTitle={service.servicesTitle}
              serviceMetaTitle={service.servicesMetaTitle}
              id={l} key={l} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
