"use client"

import { useState } from 'react';

const Scoreboard = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  let touchStartTimeA = 0;
  let touchStartTimeB = 0;

  const handleIncrement = (team) => {
    if (team === 'A') {
      setTeamAScore(teamAScore + 1);
    } else if (team === 'B') {
      setTeamBScore(teamBScore + 1);
    }
  };

  const handleDecrement = (team) => {
    if (team === 'A') {
      setTeamAScore((prevScore) => prevScore - 1);
      navigator.vibrate && navigator.vibrate(200); // Vibrate for 200 milliseconds
    } else if (team === 'B') {
      setTeamBScore((prevScore) => prevScore - 1);
      navigator.vibrate && navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
  };

  const handleTouchStart = (team) => {
    if (team === 'A') {
      touchStartTimeA = new Date().getTime();
    } else if (team === 'B') {
      touchStartTimeB = new Date().getTime();
    }
  };

  const handleTouchEnd = (event, team) => {
    const touchEndTime = new Date().getTime();
    const touchDuration = touchEndTime - (team === 'A' ? touchStartTimeA : touchStartTimeB);

    if (touchDuration >= 1000) { // You can adjust the duration as needed
      event.preventDefault(); // Prevent the default context menu
      handleDecrement(team);
    }
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
      <div
        className="flex-1 flex items-center justify-center bg-blue-500 cursor-pointer"
        onClick={() => handleClick('A')}
        onTouchStart={() => handleTouchStart('A')}
        onTouchEnd={(e) => handleTouchEnd(e, 'A')}
      >
        <div className="text-white text-4xl">{teamAScore}</div>
      </div>

      {/* Divider */}
      <div className="w-2 bg-gray-500"></div>

      {/* Team B */}
      <div
        className="flex-1 flex items-center justify-center bg-red-500 cursor-pointer"
        onClick={() => handleClick('B')}
        onTouchStart={() => handleTouchStart('B')}
        onTouchEnd={(e) => handleTouchEnd(e, 'B')}
      >
        <div className="text-white text-4xl">{teamBScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;