import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["hello", "po"]);
  const [isCorrect, SetIsCorrect] = useState(false);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });
  };

  const addNewGuess = () => {};

  const handleKeyup = ({ key }) => {
    console.log(history);
    if (key === "Enter") {
      if (turn > 5) {
        console.log("you lose");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("not a 5 letter word");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("you already guessed that");
        return;
      }
      setHistory([currentGuess, ...history]);
      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };
  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
