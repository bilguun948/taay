'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../component/header'

export default function Lesen() {
  const [open, setOpen] = useState(false)
const [progress, setProgress] = useState({
  teil1: 0,
  teil2: 0,
  teil3: 0,
  teil4: 0,
  teil5: 0,
})
useEffect(() => {
  const saved = localStorage.getItem("lesen-progress")
  if (saved) setProgress(JSON.parse(saved))
}, [])

useEffect(() => {
  localStorage.setItem("lesen-progress", JSON.stringify(progress))
}, [progress])


  return (
    <>
      {/* 📱 MOBILE TOP BAR */}
      <Header/>
      <div className="md:hidden bg-gray-200 p-4">
        <button
          onClick={() => setOpen(!open)}
          className="w-full py-2 bg-orange-500 text-white rounded-full"
        >
          Lesen Teile auswählen
        </button>

        {open && (
          <div className="flex flex-col gap-2 mt-3">
           <SidebarButtons progress={progress} />
          </div>
        )}
      </div>

      <div className="flex flex-row">
        {/* 💻 DESKTOP SIDEBAR */}
        <div className="hidden md:block w-1/4 bg-gray-200 p-4">
          <h1 className="text-center text-xl font-bold mb-4">
            Tests und Übungen für Goethe B1 Lesen Prüfung
          </h1>

          <div className="flex flex-col gap-2">
            <SidebarButtons progress={progress} />
          </div>
        </div>

        {/* 👉 MAIN CONTENT */}
        <div className="flex flex-col p-4 gap-2 w-3/4">
          <h1 className="text-xl font-bold">B1 Lesen Teil 1 Übungen</h1>
          <div className="flex items-center justify-between border p-4 rounded-lg">
  <Link href="/lesen/teil1/ubung1">
  <div className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
    <p className="text-sm text-gray-500">Übung 1.1</p>
    <p className="font-bold">
      Die Macht der inneren und äußeren Bilder
    </p>
  </div>
</Link>

  <ProgressCircle percent={progress.teil1} />
</div>
<div className="flex items-center justify-between border p-4 rounded-lg">
  <Link href="/lesen/teil1/ubung2">
  <div className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
    <p className="text-sm text-gray-500">Übung 1.2</p>
    <p className="font-bold">
      Wenn Kaufen zur Belastung wird
    </p>
  </div>
</Link>

  <ProgressCircle percent={progress.teil1} />
</div>
<div className="flex items-center justify-between border p-4 rounded-lg">
  <Link href="/lesen/teil1/ubung3">
  <div className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
    <p className="text-sm text-gray-500">Übung 1.3</p>
    <p className="font-bold">
      Schönheitsnormen und der Wunsch nach Veränderung
    </p>
  </div>
</Link>

  <ProgressCircle percent={progress.teil1} />
</div>
<div className="flex items-center justify-between border p-4 rounded-lg">
  <Link href="/lesen/teil1/ubung1">
  <div className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
    <p className="text-sm text-gray-500">Übung 1.1</p>
    <p className="font-bold">
      Die Macht der inneren und äußeren Bilder
    </p>
  </div>
</Link>

  <ProgressCircle percent={progress.teil1} />
</div>

<div className="flex items-center justify-between border p-4 rounded-lg">
  <Link href="/lesen/teil1/ubung1">
  <div className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
    <p className="text-sm text-gray-500">Übung 1.1</p>
    <p className="font-bold">
      Die Macht der inneren und äußeren Bilder
    </p>
  </div>
</Link>

  <ProgressCircle percent={progress.teil1} />
</div>
<div className="flex items-center justify-between border p-4 rounded-lg">
  <Link href="/lesen/teil1/ubung1">
  <div className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition">
    <p className="text-sm text-gray-500">Übung 1.1</p>
    <p className="font-bold">
      Die Macht der inneren und äußeren Bilder
    </p>
  </div>
</Link>

  <ProgressCircle percent={progress.teil1} />
</div>
        </div>
      </div>
    </>
  )
}



type Props = {
  percent: number
}

function ProgressCircle({ percent }: Props) {
  const radius = 40
  const stroke = 6
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset =
    circumference - (percent / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/* Background circle */}
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress circle */}
      <circle
        stroke="#f97316"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />

      {/* Percent text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-sm font-bold fill-gray-700"
      >
        {percent}%
      </text>
    </svg>
  )
}
type ProgressType = {
  teil1: number
  teil2: number
  teil3: number
  teil4: number
  teil5: number
}

function SidebarButtons({ progress }: { progress: ProgressType }) {
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <button className="py-2 px-4 rounded-full bg-orange-500 text-white w-full">
          Lesen Teil 1
        </button>
        {/* <ProgressCircle percent={progress.teil1} /> */}
      </div>

      <div className="flex items-center justify-between p-2 ">
        <button className="py-2 px-4 rounded-full border-2 border-black w-full">
          Lesen Teil 2
        </button>
        {/* <ProgressCircle percent={progress.teil2} /> */}
      </div>
    </>
  )
}

// function handleFinishExam(correct:any, total:number) {
//   const percent = Math.round((correct / total) * 100)

//   setProgress(prev => ({
//     ...prev,
//     teil1: percent
//   }))
// }
