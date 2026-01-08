"use client";
import { useState } from "react";
import Word from "./pages/word";
// import Vortrag from "./pages/vortrag";
// import Vortrag from "./vortrag/page";
import Lesen from "./pages/lesen"
export default function Home() {
  const [activeTab, setActiveTab] = useState<"word" | "lesen" | "schreiben" | "horen">("word");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      {/* HEADER */}
      <div className="w-full bg-[#2c2c2c] dark:bg-neutral-900 shadow p-4 flex gap-6 justify-evenly text-lg font-semibold fixed">
        <div className="flex justify-center items-center">
         <h1 className="text-orange-400 font-bold text-xl">Герман хэл</h1>
         <h1 className="text-white font-bold text-xl">ний шалгалтанд бэлдэх</h1>
        </div>
        <div className="flex gap-6">
        <button
          onClick={() => setActiveTab("word")}
          className={`px-4 rounded ${
            activeTab === "word"
              ? "bg-orange-400 text-white"
              : "hover:text-orange-400 text-white cursor-pointer dark:hover:bg-orange-400 hover:border-[1px] "
          }`}
        >
          Word
        </button>
        <button
          onClick={() => setActiveTab("lesen")}
          className={`px-4  rounded ${
            activeTab === "lesen"
              ? " bg-orange-400 text-white"
              : "hover:text-orange-400 text-white cursor-pointer dark:hover:border-orange-400 hover:border-[1px]"
          }`}
        >
          Lesen
        </button>
         <button
          onClick={() => setActiveTab("word")}
          className={`px-4 rounded ${
            activeTab === "horen"
              ? "bg-orange-400 text-white"
              : "hover:text-orange-400 text-white cursor-pointer dark:hover:bg-orange-400 hover:border-[1px] "
          }`}
        >
          Horen
        </button>
        <button
          onClick={() => setActiveTab("lesen")}
          className={`px-4  rounded ${
            activeTab === "schreiben"
              ? " bg-orange-400 text-white"
              : "hover:text-orange-400 text-white cursor-pointer dark:hover:border-orange-400 hover:border-[1px]"
          }`}
        >
          Schreiben
        </button>
</div>
<div>
  <button className="border-orange-400 border-[1px] text-white px-4 py-2 cursor-pointer rounded-xl hover:text-orange-400">
    Нэвтрэх
  </button>
</div>
      </div>

      {/* CONTENT SWITCHING */}
      <div className="">
        {activeTab === "word" && <Word />}
        {activeTab === "lesen" && <Lesen />}
        {activeTab === "horen" && <Word />}
        {activeTab === "schreiben" && <Lesen />}
      </div>
    </div>
  );
}
