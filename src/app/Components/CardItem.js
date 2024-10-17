"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

function CardItem({ instructor, index, matched, setMatched }) {
  const [flip, setFlip] = useState(instructor.imageBack);

  function clickHandler() {
    if (flip === instructor.image) {
      setFlip(instructor.imageBack);
    } else {
      setFlip(instructor.image);
    }

    if (matched.length === 0) {
      setMatched([instructor]);
    } else if (matched[0].id === instructor.id) {
      setMatched([]);
    } else {
      setFlip(instructor.imageBack);
    }
  }
  console.log(flip);

  return (
    <div
      className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter"
      onClick={clickHandler}
    >
      <Image
        key={index}
        src={flip}
        alt={`Image of ${index}`}
        width={250}
        height={250}
      />
    </div>
  );
}

export default CardItem;
