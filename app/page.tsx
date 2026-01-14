"use client";
import { useState } from "react";
import Word from "./word/page";
import Lesen from "./lesen/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "word" | "lesen" | "schreiben" | "horen"
  >("word");

  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { key: "word", label: "Word" },
    { key: "lesen", label: "Lesen" },
    { key: "horen", label: "Hören" },
    { key: "schreiben", label: "Schreiben" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#2c2c2c] dark:bg-neutral-900 shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-1">
            <h1 className="text-orange-400 font-bold text-sm sm:text-lg">
              Герман хэл
            </h1>
            <h1 className="text-white font-bold text-sm sm:text-lg">
              ний шалгалтанд бэлдэх
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-3 text-sm lg:text-base">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key as any)}
                className={`px-4 py-1 rounded transition
                  ${
                    activeTab === item.key
                      ? "bg-orange-400 text-white"
                      : "text-white hover:text-orange-400 hover:border hover:border-orange-400"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* LOGIN */}
            <button className="hidden sm:block border border-orange-400 text-white px-4 py-1 rounded-lg hover:text-orange-400">
              Нэвтрэх
            </button>

            {/* HAMBURGER (MOBILE) */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden bg-[#2c2c2c] dark:bg-neutral-900 border-t border-neutral-700">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key as any);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-6 py-3 text-white transition
                  ${
                    activeTab === item.key
                      ? "bg-orange-400"
                      : "hover:bg-neutral-700"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* CONTENT */}
      <main className="pt-20 px-4">
        {activeTab === "word" && <Word />}
        {activeTab === "lesen" && <Lesen />}
        {activeTab === "horen" && <Word />}
        {activeTab === "schreiben" && <Lesen />}
      </main>
    </div>
  );
}
