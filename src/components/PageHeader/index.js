import React, { PropTypes as T } from 'react';

const PageHeader = ({ title, background, style }) => (
    <section
      className="page-section bg-dark bg-dark-alfa-70"
      data-background={background}
      style={{ background: `url(${background})`, backgroundSize: '100% auto', ...style }}
    >
      <div className="relative container">
          <div className="home-content">
              <div className="home-text">
                  <h1 className="hs-line-14 font-alt mb-0">
                      {title}
                  </h1>
              </div>
          </div>
      </div>
  </section>
);

PageHeader.propTypes = {
  title: T.string.isRequired,
  background: T.string.isRequired,
}

export default PageHeader;
