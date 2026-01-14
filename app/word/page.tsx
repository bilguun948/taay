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
    <div className="h-full flex items-center justify-center p-40">
      <div className="w-full max-w-md bg-gray-200 shadow-lg rounded-xl p-6 space-y-6 border-gray-300 border-[2px]">
        
        <h1 className="text-xl font-semibold text-center text-gray-800">
          Герман үг: <b className="text-orange-500">{currentWord.german}</b>
        </h1>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Монгол тайлбар"
          className="
          placeholder:text-gray-500
            w-full 
            border 
            border-gray-300 
            rounded-lg 
            p-3 
            text-lg 
            text-orange-500
            focus:outline-none 
            focus:border-orange-500
          "
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={checkAnswer} 
            className="flex-1 bg-orange-500 text-white p-2 rounded-lg text-center active:scale-95"
          >
            Шалгах
          </button>

          <button 
            onClick={getRandom} 
            className="flex-1 bg-gray-500 text-white p-2 rounded-lg text-center active:scale-95"
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
