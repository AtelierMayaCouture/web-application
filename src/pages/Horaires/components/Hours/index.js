import React from "react";
import pure from "recompose/pure";

// global components
import Table from "../../../../components/Table";

// local components
import Line from "./../Line";

// data
import data from "./../../data";

const Hours = () => (
  <div className="section-text mb-80 mb-xs-60">
    <div className="row">
      <div className="col-sm-3" />
      <div className="col-sm-6">
        <p>
          L'atelier est ouvert du mardi au samedi de 9h à 12h30 ainsi que le
          mercredi après-midi.
        </p>
        <br />
        <br />
        <Table>
          {data.map((item) => (
            <Line
              key={`${item.day}-${item.hours}`}
              title={item.day}
              description={item.hours}
            />
          ))}
        </Table>
      </div>
      <div className="col-sm-3" />
    </div>
  </div>
);

export default pure(Hours);
