import React from "react";
import Person from "./Person";
import "./style.css";
import data from "./data.js";

function Persons() {
  return (
    <div id="players">
      {data.map((player) => (
        <Person imgUrl={player.imgUrl} name={player.name} rate={player.rate} />
      ))}
    </div>
  );
}

export default Persons;
