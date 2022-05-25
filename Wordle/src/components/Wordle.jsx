import React, { useEffect, useState } from "react";
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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
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
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </div>
  );
}
