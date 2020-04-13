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
        <h4>
          <u>Coronavirus</u>
          <ul>
            <li>
              Je vous propose des <b>masques</b> pour vous protéger. Ils suivent
              les conseils de fabrication du CHU de Grenoble.
            </li>
            <li>
              Je peux me déplacer chez vous en gardant les distances de sécurité
              et vous pouvez me confier les travaux de couture en les mettant
              dans un sac.
            </li>
          </ul>
        </h4>
      </div>
    </div>
  </div>
);

HeroContent.propTypes = {
  text: T.string.isRequired,
  img: T.string.isRequired,
};

export default pure(HeroContent);
