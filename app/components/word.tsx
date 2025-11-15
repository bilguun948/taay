
"use client";
import { useState } from "react";
import { words } from "../words";

export default function Word() {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  console.log(currentWord);
  const [userInput, setUserInput] = useState("");
   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  console.log(isCorrect);
  function getRandom() {
    setCurrentWord(getRandomWord());
    setUserInput("");
    setIsCorrect(null);
  }

  function checkAnswer() {
    setIsCorrect(currentWord.mongolian.some(answer => answer === userInput.trim()));
  }

  return (
    <div className="p-4">
      <h1 className="">Герман үг: <b>{currentWord.german}</b></h1>

      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Монгол тайлбар"
        className="border p-2"
      />

      <button onClick={checkAnswer} className="bg-blue-500 text-white p-2 ml-2">
        Шалгах
      </button>

      <button onClick={getRandom} className="bg-gray-500 text-white p-2 ml-2">
        Дараагийн үг
      </button>

      {isCorrect === true && <p className="text-green-500">Зөв!</p>}
      {isCorrect === false && (
        <p className="text-red-500">Буруу! Зөв хариулт: {currentWord.mongolian}</p>
      )}
    </div>
  );
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
