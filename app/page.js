import WritePost from "@/components/WritePost";

export default function Home() {
  return (
    <div className="w-[30rem] text-white p-3 min-h-full border-x-slate-400 border-x-[1px]">
        <h1 className="text-xl font-bold">
          Home
        </h1>
        <WritePost/>
    </div>
  )
}
