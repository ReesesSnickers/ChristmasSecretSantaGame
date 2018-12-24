import React from 'react';

function PlayerObject(props) {
  return (<div style ={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "500px", }}>{props.value}</div>);
}
  
export default function PlayingList(props) {
  const players = props.players;
  let playerArray = []
  Object.keys(players).forEach(key => playerArray.push(players[key]));
  const playerList = playerArray.map(player => <PlayerObject key={player.name} value={player.name} />)

  return (
      <div style={{width: "50vw"}}>{playerList}</div>
  );
}