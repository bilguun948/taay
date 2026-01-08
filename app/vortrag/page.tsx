// "use client";

// import { useEffect, useState } from "react";

// type Vortrag = {
//   id: string;
//   title: string;
//   content: string;
// };

// export default function VortragPage() {
//   const [list, setList] = useState<Vortrag[]>([]);
//   const [active, setActive] = useState<Vortrag | null>(null);

//   useEffect(() => {
//     fetch("/api/vortrag")
//       .then((res) => res.json())
//       .then((data: Vortrag[]) => {
//         setList(data);
//         setActive(data[0] ?? null);
//       });
//   }, []);

//   return (
//     <div className="flex p-6 gap-6 bg-white shadow rounded-lg">
//       {/* Sidebar */}
//       <ul className="w-64 border-r pr-3 space-y-2">
//         {list.map((v) => (
//           <li
//   key={v.id}
//   onClick={() => setActive(v)}
//   className={`cursor-pointer p-2 rounded-lg transition-all
//     ${active?.id === v.id 
//       ? "bg-blue-600 text-white shadow" 
//       : "hover:bg-gray-200 dark:hover:bg-neutral-700"}
//   `}
// >
//   {v.title}
// </li>

//         ))}
//       </ul>

//       {/* Content */}
// <div className="flex-1 px-4">

//   {active && (
//     <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-sm border">

//       {/* Title */}
//       <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">
//         {active.title}
//       </h2>

//       {/* Divider */}
//       <div className="h-0.5 bg-gray-300 dark:bg-neutral-700 mb-4"></div>

//       {/* Scrollable Text Box */}
//       <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 
//                       max-h-[450px] overflow-y-auto pr-2 whitespace-pre-line">

//         {active.content}

//       </div>

//     </div>
//   )}

// </div>

//     </div>
//   );
// }
