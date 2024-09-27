import Flame from "../components/flame";

export default function Video() {
  console.log(process.env.NEXT_PUBLIC_MICROCMS_API_KEY);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white gap-[40px] p-[40px]">
      <Flame />
    </main>
  );
}