import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

// local components
import ImageItem from './ImageItem';

const SmallCarousel = ({ data }) => {
  return (
    <section className="page-section pt-0 pb-0">
        <div className="relative">

           <div className="image-carousel bg-dark">

             { data.map( item => <ImageItem key={item.key} src={item.src} alt={item.alt} />) }

            </div>

        </div>
    </section>
  );
}

SmallCarousel.propTypes = {
  data: T.array.isRequired,
};

export default pure(SmallCarousel);
