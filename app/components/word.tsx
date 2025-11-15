"use client";
import { useState } from "react";
import { words } from "../words";

export default function Word() {
  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  function getRandom() {
    setCurrentWord(getRandomWord());
    setUserInput("");
    setIsCorrect(null);
  }

  function checkAnswer() {
    const normalizedInput = userInput.trim().toLowerCase().normalize("NFC");

    const isMatch = currentWord.mongolian.some(answer => {
      return answer.toLowerCase().normalize("NFC") === normalizedInput;
    });

    setIsCorrect(isMatch);
  }

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6">
        
        <h1 className="text-xl font-semibold text-center text-gray-800">
          Герман үг: <b className="text-blue-600">{currentWord.german}</b>
        </h1>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Монгол тайлбар"
          className="
            w-full 
            border 
            border-gray-300 
            rounded-lg 
            p-3 
            text-lg 
            focus:outline-none 
            focus:border-blue-500
          "
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={checkAnswer} 
            className="flex-1 bg-blue-500 text-white p-3 rounded-lg text-center active:scale-95"
          >
            Шалгах
          </button>

          <button 
            onClick={getRandom} 
            className="flex-1 bg-gray-500 text-white p-3 rounded-lg text-center active:scale-95"
          >
            Дараагийн үг
          </button>
        </div>

        <div className="text-center min-h-[30px]">
          {isCorrect === true && (
            <p className="text-green-600 font-semibold text-lg">Зөв!</p>
          )}
          {isCorrect === false && (
            <p className="text-red-600 font-semibold text-lg">
              Буруу! Зөв хариулт:{" "}
              <span className="underline">{currentWord.mongolian}</span>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
