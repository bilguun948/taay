import { useState } from "react";

export default function Lesen() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <h1>B1 Lesen – Übung</h1>

      <p>
        Anna arbeitet in einem Büro. Sie beginnt um 9 Uhr zu arbeiten und macht
        um 12 Uhr Mittagspause.
      </p>

      <h3>Frage:</h3>
      <p>Wann beginnt Anna zu arbeiten?</p>

      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? "Хариуг нуух" : "Хариуг харах"}
      </button>

      {showAnswer && (
        <p style={{ marginTop: "10px", color: "green" }}>
          ✅ Хариу: Anna beginnt um 9 Uhr zu arbeiten.
        </p>
      )}
    </>
  );
}
