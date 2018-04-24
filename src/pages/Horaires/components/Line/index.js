import React, { PropTypes as T } from 'react';
import pure from 'recompose/pure';

const Line = ({ title, description }) => (
  <tr>
      <td>{title}</td>
      <td className="align-right">{description}</td>
  </tr>
);

Line.propTypes = {
  title: T.string,
  description: T.string,
};

export default pure(Line);
