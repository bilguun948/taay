"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header(){
     const [menuOpen, setMenuOpen] = useState(false);
    return(<>
        <header className="relative top-0 left-0 w-full z-50 bg-[#2c2c2c] dark:bg-neutral-900 shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-1">
            <h1 className="text-white font-bold text-sm sm:text-lg">
              <b className="text-orange-400">Герман хэл</b>ний шалгалтанд бэлдэх
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-3 text-sm lg:text-base">
            <Link
  href="/word"
  className="text-white px-4 py-1 rounded hover:text-orange-400 border hover:border-white border-orange-400"
>
  Word
</Link>

<Link
  href="/lesen"
  className="text-white px-4 py-1 rounded hover:text-orange-400 border hover:border-white border-orange-400"
>
  Lesen
</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* LOGIN */}
            <Link href="/login" className="hidden sm:block border border-orange-400 text-white px-4 py-1 rounded-lg hover:text-orange-400">
              Нэвтрэх
            </Link>

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
            <Link
  href="/word"
  className="text-white px-4 py-1 rounded hover:text-orange-400"
>
  Word
</Link>

<Link
  href="/lesen"
  className="px-4 py-1 rounded hover:text-orange-400"
>
  Lesen
</Link>
          </div>
        )}
      </header>
        </>)
}