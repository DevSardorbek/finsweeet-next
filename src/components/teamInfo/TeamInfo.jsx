import React from "react";
import teamImg1 from "@/assets/team1.png";
import teamImg2 from "@/assets/team2.png";
import Image from "next/image";
import "@/sass/__teamInfo.scss";
const TeamInfo = () => {
  return (
    <div className="teamInfo__wrapper">
      <div className="container">
        <div className="teamInfo__section">
          <div className="teamInfo__section-item">
            <div className="teamInfo__info">
              <h2>Our team of creatives</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div className="teamInfo__img">
              <Image src={teamImg1} />
            </div>
          </div>
          <div className="teamInfo__section-item column1">
            <div className="teamInfo__info">
              <h2>Why we started this Blog</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div className="teamInfo__img">
              <Image src={teamImg2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
