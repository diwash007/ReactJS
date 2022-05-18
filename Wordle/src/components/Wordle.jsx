import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
  const { currentGuess, guesses, isCorrect, turn, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  return (
    <div>
      Solution - {solution} <br />
      Current Guess: {currentGuess} <br />
    </div>
  );
}
