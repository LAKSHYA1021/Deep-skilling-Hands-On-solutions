import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Rohit', score: 80 },
    { name: 'Virat', score: 90 },
    { name: 'Gill', score: 60 },
    { name: 'Pant', score: 50 },
    { name: 'Iyer', score: 75 },
    { name: 'Rahul', score: 65 },
    { name: 'Hardik', score: 85 },
    { name: 'Jadeja', score: 68 },
    { name: 'Shami', score: 78 },
    { name: 'Kuldeep', score: 45 },
    { name: 'Bumrah', score: 88 }
  ];

  const below70 = players.filter(player => player.score < 70); // arrow function

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
