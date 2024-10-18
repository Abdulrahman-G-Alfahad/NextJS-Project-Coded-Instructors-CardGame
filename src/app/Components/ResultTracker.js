"use client";
import { useState } from "react";
import CardsList from "./CardsList";

function ResultTracker({ instructors }) {
  const [score, setScore] = useState(0);
  const [faild, setFaild] = useState(0);

  const incrementScore = () => {
    setScore((newScore) => newScore + 1);
  };

  const decrementScore = () => {
    setFaild((newScore) => newScore + 1);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Score: {score}</h2>
      <h2 className="text-2xl font-bold mb-4">Faild Attampts: {faild}</h2>
      <CardsList
        instructors={instructors}
        incrementScore={incrementScore}
        decrementScore={decrementScore}
      />
    </div>
  );
}

export default ResultTracker;
