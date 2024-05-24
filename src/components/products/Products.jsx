"use client";
import React from "react";
import "@/sass/__products.scss";
import Image from "next/image";

const Products = ({ data }) => {
  console.log(data);
  let card = data?.map((el) => (
    <div key={el.id} className="product__card">
      <Image width={405} height={318} src={el.images[0]} alt="" />
      <h2>${el.price}</h2>
      <h3>{el.title}</h3>
      <p>{el.description}</p>
    </div>
  ));
  return (
    <div className="products__wrapper">
      <div className="container">
        <div className="products__title">
          <h2>Products</h2>
        </div>
        <div className="products__section">{card}</div>
      </div>
    </div>
  );
};

export default Products;
