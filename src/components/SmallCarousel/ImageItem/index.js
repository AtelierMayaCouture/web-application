import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const ImageItem = ({ src, alt }) => (
  <div>
      <div
        className="post-prev-img mb-0"
      >
          <a href={`/images/carousel/${src}`} className="lightbox-gallery-2 mfp-image">
            <img
              src={`/images/carousel/thumbnails/${src}`}
              alt={alt}
              style={{
                verticalAlign: 'middle',
              }}
            />
          </a>
      </div>
  </div>
);

ImageItem.propTypes = {
  src: T.string.isRequired,
  alt: T.string.isRequired,
};

export default pure(ImageItem);
