"use client";
import { useState } from "react";
import Word from "./components/word";
// import Vortrag from "./components/vortrag";
import Vortrag from "./vortrag/page";
export default function Home() {
  const [activeTab, setActiveTab] = useState<"word" | "vortrag">("word");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      {/* HEADER */}
      <div className="w-full bg-white dark:bg-neutral-900 shadow p-4 flex gap-6 justify-center text-lg font-semibold">

        <button
          onClick={() => setActiveTab("word")}
          className={`px-4 py-2 rounded ${
            activeTab === "word"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-neutral-700"
          }`}
        >
          Word
        </button>

        <button
          onClick={() => setActiveTab("vortrag")}
          className={`px-4 py-2 rounded ${
            activeTab === "vortrag"
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200 dark:hover:bg-neutral-700"
          }`}
        >
          Vortrag
        </button>
      </div>

      {/* CONTENT SWITCHING */}
      <div className="">
        {activeTab === "word" && <Word />}
        {activeTab === "vortrag" && <Vortrag />}
      </div>
    </div>
  );
}
