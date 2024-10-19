"use client";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";

function CardsList({ instructors, incrementScore, incrementFailed }) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [shuffledInstructors, setShuffledInstructors] = useState([]);

  useEffect(() => {
    const doubleInstructors = [...instructors, ...instructors];
    const shuffled = doubleInstructors.sort(() => Math.random() - 0.5);
    setShuffledInstructors(shuffled);
    setFlippedCards([]);
    setMatched([]);
  }, [instructors]);

  function matchHandler(instructor, index) {
    if (flippedCards.length === 2) {
      return;
    }

    if (flippedCards.length === 1 && flippedCards[0].index === index) {
      return;
    }

    const newFlippedCards = [...flippedCards, { instructor, index }];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;

      if (firstCard.instructor.id === secondCard.instructor.id) {
        setMatched((prevMatched) => [
          ...prevMatched,
          firstCard.instructor.id,
          secondCard.instructor.id,
        ]);
        incrementScore();
        setTimeout(() => setFlippedCards([]), 1500);
      } else {
        incrementFailed();
        setTimeout(() => setFlippedCards([]), 1500);
      }
    }
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {shuffledInstructors.map((instructor, index) => (
        <CardItem
          key={index}
          instructor={instructor}
          index={index}
          isFlipped={
            flippedCards.some((card) => card.index === index) ||
            matched.includes(instructor.id)
          }
          matchHandler={matchHandler}
        />
      ))}
    </div>
  );
}

export default CardsList;
