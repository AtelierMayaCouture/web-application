import React from 'react';
import pure from 'recompose/pure';

// local components
import HeroContent from './HeroContent';
import Slide from './Slide';

// data
import data from './data';

const FullWidthSlider = () => {
  return (
    <div className="bg-dark relative" id="home">

      {/* Background slider */}
      <div className="fullwidth-gallery">
        { data.map( item => <Slide key={item.key} background={item.background} />) }
      </div>

      <div className="js-height-full fullwidth-galley-content">

        {/* <!-- Hero Content --> */}
        <HeroContent text="19 rue de la loi - 56.000 Vannes FR" img="/images/logo_white.png" />

        {/* <!-- Scroll Down --> */}
        <div className="local-scroll">
            <a href="#about" className="scroll-down"><i className="fa fa-angle-down scroll-down-icon"></i></a>
        </div>

      </div>
    </div>
  );
}

export default pure(FullWidthSlider);
