import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const Projs = [
    {
      name: "What is biogeo chemical cycle",
      link: "/wbch",
      style: "mt-10 bg-stone-200",
      auth: "Hrishikesh"
    },
    {
      name: "different type of biogeo chemical cycle",
      link: "/dtbch",
      style: "bg-slate-200",
      auth: "Fitha"
    },
    { name: "water cycle", link: "/wtc", style: "bg-sky-300", auth:"Devika" },
    { name: "carbon cycle", link: "/crbc", style: "bg-zinc-400", auth:"Diya" },
    { name: "oxygen cycle", link: "/ocyc", style: "bg-blue-200", auth: "Dilshad" },
    { name: "nitrogen cycle", link: "/nitc", style: "bg-indigo-200", auth:"Azwin" },
  ];
  return (
    <>
      <Head>
        <title>Bio Geo Chemical Cycle</title>
      </Head>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 pb-10 grid-cols-1 space-y-10">
        {Projs.map((det) => (
          <Link href={det.link} key="`">
            <a className={`${det.style} grid h-60 w-10/12 m-auto rounded-xl`}>
              <div className="m-auto grid">
                <h1 className="text-xl uppercase px-5 text-center">
                  {det.name}
                </h1>
                <span className="mx-auto mt-3 text-xs">Authr: {det.auth}</span>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="mb-10 h-56 grid mx-auto bg-amber-100 md:w-6/12 w-10/12 lg:w-3/12 rounded-xl">
        <div className="m-auto grid">
          <h1 className="text-xl uppercase px-5 text-center">Credits</h1>
        </div>
      </div>
    </>
  );
}