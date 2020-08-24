import React from "react";
import pure from "recompose/pure";

const Cours = () => (
  <span>
    <h2 className="section-title font-alt mb-70 mb-sm-40">Cours de couture</h2>
    <div className="section-text mb-80 mb-xs-60">
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-6">
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Les 3h</td>
                <td className="align-right">28€</td>
              </tr>

              <tr>
                <td>Les 10 séances de 3h</td>
                <td className="align-right">250€</td>
              </tr>

              <tr>
                <td>
                  Quand?
                  <div className="small">
                    <br />
                    <div>Samedi de 9h30 à 12h30</div>
                    <div>Jeudi 17h à 20h</div>
                    <br />
                    Jusqu'a 4 personnes simultanément.
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-3" />
      </div>
    </div>
  </span>
);

export default pure(Cours);
