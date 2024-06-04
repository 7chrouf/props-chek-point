import React from 'react'
import Person from './Person';
const data = [
  {
    imgUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    name: "Lebron james",
    rate: 96,
  },
  {
    imgUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    name: "Lebron james",
    rate: 96,
  },
  {
    imgUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png",
    name: "kawhi leonard",
    rate: 95,
  },
  {
    imgUrl:
      "https://sportshub.cbsistatic.com/i/sports/player/headshot/1646703.png?width=200",
    name: "jimmy butler",
    rate: 92,
  },
  {
    imgUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
    name: "jayson tatum",
    rate: 92,
  },
  {
    imgUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png",
    name: "demar derozan",
    rate: 89,
  },
];
function Persons() {
  return (
    <div id="players">
      {data.map((players) => (
        <Person imgUrl={Person.imgUrl} name={Person.name} rate={Person.rate} />
      ))}
    </div>
  );
}

export default data
