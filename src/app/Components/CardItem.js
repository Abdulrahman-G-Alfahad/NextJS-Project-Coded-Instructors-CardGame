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
      className="h-120 w-70 rounded shadow-lg mx-auto border border-palette-lighter cursor-pointer"
      onClick={clickHandler}
    >
      <Image
        key={index}
        src={flip ? instructor.image : instructor.imageBack}
        alt={`Card ${index}`}
        width={250}
        height={250}
        className="rounded"
      />
    </div>
  );
}

export default CardItem;
