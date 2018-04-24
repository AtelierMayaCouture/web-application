import React, { PropTypes as T } from 'react';

const Table = ({ children }) => (
  <table className="table table-hover">
    <tbody>
      { children }
    </tbody>
  </table>
);

Table.propTypes = {
  children: T.node.isRequired,
};

export default Table;
