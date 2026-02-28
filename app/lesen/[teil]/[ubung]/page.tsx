import { lesenData } from "@/data/lesenData";
import Header from "@/app/component/header";
import QuizClient from "@/app/component/quizClient";

export default async function UbungPage({
  params,
}: {
  params: Promise<{ ubung: string; teil: string }>;
}) {
  const { ubung, teil } = await params;

  const exercise =
    lesenData[teil as keyof typeof lesenData]?.[
      ubung as keyof (typeof lesenData)[keyof typeof lesenData]
    ];

  if (!exercise) return <div>Олдодгүй ээ бро</div>;

  return (
    <>
      <Header />
      <QuizClient exercise={exercise} />
    </>
  );
}