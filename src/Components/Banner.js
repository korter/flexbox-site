import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const faAngle = <FontAwesomeIcon icon={faAngleDoubleRight} />;
  return (
    <div className="banner-container">
      <h1 className="banner-title">I'm Kortino</h1>
      <div className="banner-jobs">
        <div className="banner-items">
          <h2>
            Developer
            <span>{faAngle}</span>
          </h2>
        </div>

        <div className="banner-items">
          <h2>
            Designer
            <span>{faAngle}</span>
          </h2>
        </div>

        <div className="banner-items">
          <h2>
            Photographer
            <span>{faAngle}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
