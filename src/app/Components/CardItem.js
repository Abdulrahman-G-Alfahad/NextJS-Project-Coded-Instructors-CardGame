"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function CardItem({ instructor, index, isFlipped, matchHandler }) {
  const [flip, setFlip] = useState(isFlipped);

  useEffect(() => {
    setFlip(isFlipped);
  }, [isFlipped]);

  function clickHandler() {
    if (!flip) {
      matchHandler(instructor, index);
    }
  }

  return (
    <div
      className={`flip-card h-64 w-64 cursor-pointer`}
      onClick={clickHandler}
    >
      <div
        className={`flip-card-inner relative h-full w-full transform transition-transform duration-700 ${
          flip ? "rotate-y-180" : ""
        }`}
      >
        <div className="flip-card-front backface-hidden">
          <Image
            src={instructor.imageBack}
            alt={`Card back ${index}`}
            width={250}
            height={250}
            className="rounded"
          />
        </div>

        <div className="flip-card-back backface-hidden">
          <Image
            src={instructor.image}
            alt={`Card front ${index}`}
            width={250}
            height={250}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
