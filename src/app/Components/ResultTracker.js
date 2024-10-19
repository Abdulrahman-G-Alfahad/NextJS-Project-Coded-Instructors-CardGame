"use client";
import { useState } from "react";
import CardsList from "./CardsList";

function ResultTracker({ instructors }) {
  const [score, setScore] = useState(0);
  const [failed, setFailed] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const incrementFailed = () => {
    setFailed((prevFailed) => prevFailed + 1);
  };

  const resetGame = () => {
    setScore(0);
    setFailed(0);
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Score: {score}</h2>
      <h2 className="text-2xl font-bold mb-4">Failed Attempts: {failed}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={resetGame}
      >
        Reset Game
      </button>
      <CardsList
        key={resetKey}
        instructors={instructors}
        incrementScore={incrementScore}
        incrementFailed={incrementFailed}
      />
    </div>
  );
}

export default ResultTracker;
