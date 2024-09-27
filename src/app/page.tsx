import Image from "next/image";
import Top from "@/app/components/top"
import About from "@/app/components/about"
import Company from "./components/company";
import Flow from "./components/flow";
import Works from "./components/works";
import Contact from "./components/contact";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_MICROCMS_API_KEY);
  return (
    <main className="font-body flex min-h-screen flex-col items-center justify-between bg-white gap-[40px] p-[40px]">
      <Top />
      <About />
      <Company />
      <Flow />
      <Works />
      <Contact />
    </main>
  );
}
