"use client";

import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function QuizClient({ exercise }: any) {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qIndex: number, optIndex: number) => {
    const updated = [...selectedAnswers];
    updated[qIndex] = optIndex;
    setSelectedAnswers(updated);
  };

  const handleCheck = () => {
    setShowResult(true);
  };

  return (
    <div className="p-6 container mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center text-orange-400">
        {exercise.title}
      </h1>

     {exercise.content.map((c: any, index: number) => (
  <div key={index} className="mb-4">
    {typeof c === "string" ? (
      <p className="mb-3 leading-7">{c}</p>
    ) : (
      Object.values(c).map((text: any, i: number) => (
        <p key={i} className="mb-3 leading-7">
          {text}
        </p>
      ))
    )}
  </div>
))}

      {exercise.questions.map((q: any, index: number) => (
        <div key={index} className="py-3 px-5 border border-gray-400 mt-4">
          <p>{q.text}</p>

          {q.options.map((opt: any, i: number) => {
            const isCorrect = q.answer === i;
            const isSelected = selectedAnswers[index] === i;

            return (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  onChange={() => handleSelect(index, i)}
                  className="mr-2"
                />
                <span
                  className={
                    showResult
                      ? isCorrect
                        ? "text-green-600 font-bold"
                        : isSelected
                          ? "text-red-600"
                          : ""
                      : ""
                  }
                >
                  {opt}
                </span>
              </label>
            );
          })}
        </div>
      ))}

      {showResult && (
        <div className="mt-6 text-xl font-bold text-center">
          Оноо:{" "}
          {
            exercise.questions.filter(
              (q: any, i: number) => q.answer === selectedAnswers[i],
            ).length
          }
          /{exercise.questions.length}
        </div>
      )}

      <div className="flex justify-center mt-6 gap-3">
        <div className=" border border-orange-400 text-black text-xl px-8 py-2 rounded-lg cursor-pointer">
          <i className="fa-solid fa-arrow-left fa-xs mr-2"></i>
          <button
            onClick={() => {
              window.location.href = "/lesen";
            }}
            className="cursor-pointer"
          >
            Буцах
          </button>
        </div>
        <button
          onClick={handleCheck}
          className="bg-orange-400 text-white text-xl px-8 py-2 rounded-lg"
        >
          Шалгах
        </button>
      </div>
    </div>
  );
}
