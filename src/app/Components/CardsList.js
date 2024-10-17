"use client";
import Image from "next/image";
import CardItem from "./CardItem";
import { useState } from "react";

function CardsList({ instructors }) {
  const [matched, setMatched] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
  const doubleInstructors = [...instructors, ...instructors];

  shuffle(doubleInstructors);

  const cardList = doubleInstructors.map((instructor, index) => (
    <CardItem
      key={Math.random()}
      instructor={instructor}
      index={index}
      matched={matched}
      setMatched={setMatched}
    />
  ));

  return <div className="grid grid-cols-4 gap-2">{cardList}</div>;
}

export default CardsList;
