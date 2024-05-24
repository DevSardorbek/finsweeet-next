import Image from "next/image";
import React from "react";
import facebok from "@/assets/Negative.png";
import insta from "@/assets/insta.png";
import link from "@/assets/link.png";
import twit from "@/assets/twit.png";
import "@/sass/__footer.scss";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container">
        <div className="footer__section">
          <div className="footer__section-info">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className="footer__section-media">
            <Image src={facebok} />
            <Image src={twit} />
            <Image src={link} />
            <Image src={insta} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
