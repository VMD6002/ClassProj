import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ babar }) => {
  const GCC = [
    {
      name: "Main Page",
      link: "/",
    },
    {
      name: "What is biogeo chemical cycle",
      link: "/wbch",
    },
    {
      name: "different type of biogeo chemical cycle",
      link: "/dtbch",
    },
    { name: "water cycle", link: "/wtc" },
    { name: "carbon cycle", link: "/crbc" },
    { name: "oxygen cycle", link: "/ocyc" },
    { name: "nitrogen cycle", link: "/nitc" },
    // { name: "hydrogen cycle", link: "/hycyc" },
    { name: "Credits", link: "/cred" },
  ];
  return (
    <div
      className={
        `grid absolute bg-stone-900 h-screen lg:w-4/12 md:w-6/12 sm:w-8/12 w-10/12 text-gray-300 space-y-6 transform transition duration-200 ease-in-out ` +
        (babar ? "-translate-x-full" : "relative translate-x-0")
      }
    >
      <Link href="/">
        <a className="text-white text-2xl flex pt-4 pl-4 font-bold">Home</a>
      </Link>
      <div className="my-auto">
        <nav>
          {GCC.map((det) => (
            <Link key="`" href={det.link}>
              <a className="block py-2.5 px-6 rounded uppercase transition duration-200 focus:bg-stone-700 focus:text-white">
                {det.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default function Nav() {
  const [sidebar, bongbar] = useState(true);
  return (
    <div onClick={() => bongbar(!sidebar)}>
      <div className="absolute h-screen rounded-full left-auto right-0 text-gray-100">
        <div className="flex h-screen w-full justify-between max-w-4xl container mx-auto">
          {/* <Link href="/">
            <a className="block p-4 text-white font-bold"> 
              Better Dev
            </a>
          </Link> */}
          <button className="relative duration-200 p-4 my-auto bg-slate-900 overflow-hidden mr-3 space-y-[5px] rounded-full ">
            <div className={"h-[2px] w-4 rounded-lg bg-white duration-150 " + (sidebar ? "rotate-0" : "rotate-45 translate-y-[0.5rem]")}/>
            <div className={"h-[2px] w-4 rounded-lg bg-white duration-300 my-4 " + (sidebar ? "translate-x-0" : "translate-x-8")}/>
            <div className={"h-[2px] w-4 rounded-lg bg-white duration-500 " + (sidebar ? "rotate-0" : "-rotate-45 -translate-y-[0.6rem]")}/>
          </button>
        </div>
      </div>
      <Sidebar babar={sidebar} />
    </div>
  );
}
