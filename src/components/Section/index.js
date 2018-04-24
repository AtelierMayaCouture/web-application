import React, { PropTypes as T } from 'react'

const Section = ({ children }) => (
  <section className="page-section">
    <div className="container relative">
      { children }
    </div>
  </section>
);

Section.propTypes = {
  children: T.node.isRequired,
};

export default Section;
