import React from "react";
import "./style.css";
import Persons from "./Persons";

function Person({ imgUrl, name, rate }) {
  return (
    <div id="person">
      <div id="img">
        <img src={imgUrl} alt="" width={300} />
      </div>
      <div id="details">
        <div id="Person-head">
          <h1>{name} </h1>
          <h2>{rate}</h2>
        </div>
      </div>
      <div id="Person budy"></div>
    </div>
  );
}

export default Person;
