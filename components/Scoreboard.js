"use client"

import { useState } from 'react';
import { Swipeable } from 'react-swipeable';

const Scoreboard = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleIncrement = (team) => {
    if (team === 'A') {
      setTeamAScore(teamAScore + 1);
    } else if (team === 'B') {
      setTeamBScore(teamBScore + 1);
    }
  };

  const handleDecrement = (team) => {
    if (team === 'A' && teamAScore > 0) {
      setTeamAScore((prevScore) => prevScore - 1);
    } else if (team === 'B' && teamBScore > 0) {
      setTeamBScore((prevScore) => prevScore - 1);
    }
  };

  const handleContextMenu = (event, team) => {
    event.preventDefault(); // Prevent the default context menu
    handleDecrement(team);
  };

  const handleClick = (team) => {
    if (team === 'A') {
      handleIncrement('A');
    } else if (team === 'B') {
      handleIncrement('B');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Team A */}
      <Swipeable
        className="flex-1 flex items-center justify-center bg-blue-500 cursor-pointer"
        onClick={() => handleClick('A')}
        onContextMenu={(e) => handleContextMenu(e, 'A')}
        onSwipedUp={() => handleIncrement('A')}
        onSwipedDown={() => handleDecrement('A')}
      >
        <div className="text-white text-8xl select-none">{teamAScore}</div>
      </Swipeable>

      {/* Divider */}
      <div className="w-2 bg-gray-500"></div>

      {/* Team B */}
      <Swipeable
        className="flex-1 flex items-center justify-center bg-red-500 cursor-pointer"
        onClick={() => handleClick('B')}
        onContextMenu={(e) => handleContextMenu(e, 'B')}
        onSwipedUp={() => handleIncrement('B')}
        onSwipedDown={() => handleDecrement('B')}
      >
        <div className="text-white text-8xl select-none">{teamBScore}</div>
      </Swipeable>
    </div>
  );
};

export default Scoreboard;