import React from 'react';
import pure from 'recompose/pure';

const Autres = () => (
  <span>
    <h2 className="section-title font-alt mb-70 mb-sm-40">Autres prestations</h2>

    <div className="section-text mb-80 mb-xs-60">
        <div className="row">
          <div className="col-sm-3" />
            <div className="col-sm-6">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                        <td>
                            Créations sur mesure, autres demandes
                        </td>
                        <td className="align-right">26€ / h</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className="col-sm-3" />
        </div>
      </div>
  </span>
);

export default pure(Autres);
