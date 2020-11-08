import React, { PropTypes as T } from "react";
import pure from "recompose/pure";

const HeroContent = ({ text, img }) => (
  <div className="home-content container">
    <div className="home-text">
      <div className="container">
        <div className="row mb-30 mb-sm-20">
          <div className="col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
            <img src={img} alt="Logo" />
          </div>
        </div>
        <h2 className="hs-line-3 mb-0">{text}</h2>

        <br />
        <b>
        <h3 style={{
          border: "2px solid #FFF",
          padding: 10,
          fontSize: "3rem"
        }}>CONFINEMENT: La boutique est OUVERTE mais uniquement sur RDV.</h3>
        </b>

      </div>
    </div>
  </div>
);

HeroContent.propTypes = {
  text: T.string.isRequired,
  img: T.string.isRequired,
};

export default pure(HeroContent);
