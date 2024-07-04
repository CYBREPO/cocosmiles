"use client";

import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useRouter } from "next/navigation";

function BreadCrumb() {
  const router = useRouter();

 console.log(router)

  return (
    <Breadcrumb>
        <Breadcrumb.Item href="#" className="text-lead">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumb;
