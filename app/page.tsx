"use client";
import { useState } from "react";
import Word from "./word/page";
import Lesen from "./lesen/page";
import Header from "./component/header"

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "word" | "lesen" | "schreiben" | "horen"
  >("word");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      {/* HEADER */}
      <Header/>

      {/* CONTENT */}
     <main className="">
  {/* {children} */}
        {activeTab === "word" && <Word />}
        {activeTab === "lesen" && <Lesen />}
        {activeTab === "horen" && <Word />}
        {activeTab === "schreiben" && <Lesen />}
      </main>
    </div>
  );
}
