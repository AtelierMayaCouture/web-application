import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const Slide = ({ background }) => (
  <section className="home-section bg-dark bg-dark-alfa-30" data-background={background}
    style={{
      background: `url(${background})`,
      backgroundSize: 'cover',
      'backgroundRepeat': 'no-repeat',
      backgroundPosition: 'center',
      opacity: 0.2,
    }}
  >
    <div className="js-height-full" />
  </section>
);

Slide.propTypes = {
  background: T.string.isRequired,
}

export default pure(Slide);
