import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Wordle({ solution }) {
  const {
    currentGuess,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    handleKeyup,
    formatGuess,
  } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (isCorrect) {
      window.removeEventListener("keyup", handleKeyup);
      console.log("You win");
    }
    if (turn > 5) {
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [isCorrect, turn, handleKeyup]);

  return (
    <div>
      Solution - {solution} <br />
      Current Guess: {currentGuess} <br />
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        formatGuess={formatGuess}
      />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}
