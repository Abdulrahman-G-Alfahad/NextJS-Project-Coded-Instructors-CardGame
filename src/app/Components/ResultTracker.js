"use client";
import { useState } from "react";
import CardsList from "./CardsList";
import localFont from "next/font/local";

const passionRegular = localFont({
  src: "../fonts/PassionOne-Regular.ttf",
  variable: "--font-PassionOne-Regular",
  weight: "100 900",
});

const passionBold = localFont({
  src: "../fonts/PassionOne-Bold.ttf",
  variable: "--font-PassionOne-Bold",
  weight: "100 900",
});

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
    <div className="bg-gradient-to-b from-black to-slate-50">
      <div className="">
        <h1 className={`text-6xl ${passionBold.className} mb-4 gray-600`}>
          git-Instructor
        </h1>
        <h2 className={`text-2xl ${passionRegular.className} mb-4`}>
          Score: {score}
        </h2>
        <h2 className={`text-2xl ${passionRegular.className} mb-4`}>
          Failed Attempts: {failed}
        </h2>
        <button
          className="bg-gray-200 hover:bg-white text-black font-bold py-2 px-4 rounded-full text-lg"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>

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
