import Link from "next/link";
import { useState } from "react";
import Draggable from "react-draggable";

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
          <button className="relative p-4 my-auto lg:mb-10 lg:mr-10 focus:outline-none bg-black rounded-full focus:bg-gray-700">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <Sidebar babar={sidebar} />
    </div>
  );
}
