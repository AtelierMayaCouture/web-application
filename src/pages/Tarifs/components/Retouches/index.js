import React from 'react';
import pure from 'recompose/pure';

import { tarifs as dataTarifs } from './../../data';

const trStyle = {
  padding: 8,
  lineHeight: 1.42857143,
  verticalAlign: 'top',
  borderTop: '1px solid #ddd',
};

const Item = ({ price, label }) => (
  <tr style={trStyle}>
      <td>
        {label}
      </td>
      <td className="align-right">{price}€</td>
  </tr>
);

const Retouches = () => {

  const halfLength = Math.ceil(dataTarifs.length / 2);
  const leftSide = dataTarifs.slice(0, halfLength);
  const rightSide = dataTarifs.slice(halfLength, dataTarifs.length);

  return (
    <span>
      <h2 className="section-title font-alt mb-70 mb-sm-40">Retouches</h2>

      <div className="section-text mb-80 mb-xs-60">
        <div className="row">
          <div className="col-sm-6">
            <table className="table table-hover">
              <tbody>
                { leftSide.map(item => <Item key={`{item.key}-pricings`} {...item} />) }
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <table className="table table-hover">
              <tbody>
                { rightSide.map(item => <Item key={`{item.key}-pricings`} {...item} />) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </span>
  );
}

export default pure(Retouches);
