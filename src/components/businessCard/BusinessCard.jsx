"use client";
import Image from "next/image";
import React from "react";
import "@/sass/__businessCard.scss";

const BusinessCard = ({ product }) => {
  let item = product?.products.map((el) => (
    <div key={el.id} className="businessCard__item">
      <div className="businessCard__item-img">
        <Image
          src={el.images[0]}
          width={447}
          height={447}
          alt={el.title}
          objectFit="contain"
        />
      </div>
      <div className="businessCard__item-info">
        <h3>{el.category}</h3>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="businessCard__wrapper">
      <div className="container">
        <input type="text" placeholder="Searching ..." />
        <div className="businessCard__section">{item}</div>
        <div className="next">
          <p>{"<"}Prev</p>
          <span>1 2 ... 10</span>
          <span>Next {">"}</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
