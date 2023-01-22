import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "./header";
import Cards from "@/pages/home/cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-row bg-blue-500  py-20">
        <div className="flex w-1/2   text-white items-center  flex-col">
          <div className="text-left">
            <div className="text-5xl font-semibold mt-28  ">
              <div>Organize Your</div>
              <div className="mt-2 w-fit pr-1 border-r border-r-blue-100 ">
                Life Projects
              </div>
            </div>
            <div className=" my-10 text-lg text-left font-light text-blue-200 ">
              Mindify helps you capture and prioritize ideas. <br />
              projects, and to-do lists, so nothing falls yhrough the cracks.
            </div>
            <button className=" py-2 font-semibold text-lg rounded-tr-3xl rounded-br-3xl rounded-bl-3xl  px-5 bg-slate-50 text-blue-500 ">
              Get Started - It free
            </button>
          </div>
        </div>
        <div className="w-1/2  mt-28">
          <Image
            src="/images/photoone.png"
            alt="Picture"
            width={500}
            height={500}
          />
        </div>
      </div>
      <section className="flex flex-col  gap-10 mt-20">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-3xl font-bold text-gray-800">
            Focus on what matters most
          </h2>
          <span className="text-lg   text-gray-400">
            Some of Mindify's key Features
          </span>
        </div>
        <Cards/>
      </section>
    </div>
  );
}
