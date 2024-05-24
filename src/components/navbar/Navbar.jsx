import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import "@/sass/__navbar.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="container">
        <div className="navbar__section">
          <div className="navbar__logo">
            <Link href={"/"}>
              <Image src={logo} alt="img" width={140} height={28} />
            </Link>
          </div>
          <div className="navbar__items">
            <div className="navbar__links">
              <Link href={"/"}>Home</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/register"}>Register</Link>
            </div>
            <div className="navbar__search">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
