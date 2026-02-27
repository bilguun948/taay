
import { lesenData } from "@/data/lesenData"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/app/component/header";

export default async function UbungPage({ params }: {
  params: Promise<{ ubung:string, teil:string,}>;
}) {
  // const { teil, ubung } = params
  const ubung = (await params).ubung
  // 🔥 Dynamic access
  const teil = (await params).teil
  const exercise =
    lesenData[teil as keyof typeof lesenData]?.[
      ubung as keyof (typeof lesenData)[keyof typeof lesenData]
    ]

  if (!exercise) return <div>Олдодгүй ээ бро</div>

  return (
    <>
    
    <Header/>
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        {exercise.title}
      </h1>
      {/* <h1>{ubung}</h1> */}
      <p>{exercise.content}</p>
      {exercise.questions.map((q:any, index:number) => (
        <div key={index} className="py-3 px-5 border border-gray-400 mt-4">
          
          <p>{q.text}</p>
          {q.options.map((opt:any, i:number) => (
            <div key={i}>
              <label key={i}>
        <input type="radio" />
        {opt}
      </label>
            </div>
          ))}
        </div>
      ))}
      <div>
        <div className="flex flex-row mt-4 justify-center items-center gap-3">
          <div className="px-6 py-2 border border-orange-400 rounded-lg">
  <i className="fa-solid fa-arrow-left "></i>
    <a href="/lesen" className="text-xl">Буцах</a>     
</div>
<button className="bg-orange-400 text-white text-xl px-8 py-2 rounded-lg">
  Шалгах
</button>

</div>
</div>
    </div>
    </>
  )
}