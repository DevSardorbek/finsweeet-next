import React from "react";
import cardImg1 from "@/assets/categoryImg.png";
import cardImg2 from "@/assets/categoryImg2.png";
import cardImg3 from "@/assets/categoryImg3.png";
import cardImg4 from "@/assets/categoryImg4.png";
import Image from "next/image";
import "@/sass/__category.scss";
const Category = () => {
  return (
    <div className="category__wrapper">
      <div className="container">
        <div className="category__title">
          <h1>Choose A Catagory</h1>
        </div>
        <div className="category__section">
          <div className="category__card">
            <Image src={cardImg1} />
            <h3>Business</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="category__card">
            <span>
              <Image src={cardImg2} />
            </span>
            <h3>Startup</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="category__card">
            <span>
              <Image src={cardImg3} />
            </span>
            <h3>Economy</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="category__card">
            <span>
              <Image src={cardImg4} />
            </span>
            <h3>Technology</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
