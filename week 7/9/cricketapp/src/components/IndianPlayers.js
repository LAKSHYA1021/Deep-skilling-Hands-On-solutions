import React from 'react';

const IndianPlayers = () => {
  const team = ['Rohit', 'Virat', 'Gill', 'Pant', 'Iyer', 'Rahul', 'Hardik', 'Jadeja'];

  const oddTeam = team.filter((_, index) => index % 2 === 0);
  const evenTeam = team.filter((_, index) => index % 2 !== 0);

  // Destructuring example (ES6)
  const [t20p1, t20p2, ...restT20] = ['SKY', 'Tilak', 'Rinku', 'Dube'];
  const [ranji1, ranji2, ...restRanji] = ['Shaw', 'Jaiswal', 'Sarfaraz', 'Gaikwad'];

  // Merging arrays (ES6)
  const mergedPlayers = [...restT20, ...restRanji];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 + Ranji Players</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
