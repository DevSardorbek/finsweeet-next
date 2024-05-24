import React from "react";
import herobg from "@/assets/herobg.webp";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import "@/sass/__hero.scss";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <Image src={herobg} width={"100%"} alt="bg" />
      <div className="container">
        <div className="hero__section">
          <h3>
            Posted on <span>startup</span>
          </h3>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <div>
            <p>
              By <span>James West</span> | May 23, 2022{" "}
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button>
              Read More <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
