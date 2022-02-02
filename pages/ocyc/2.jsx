import Head from "next/head";
import Link from "next/link";

export default function Page2() {
  return (
    <div className="min-h-screen flex bg-[#FAF6E9]">
      <Head>
        <title>Oxygen Cycle page 2</title>
      </Head>
      <div className="m-auto py-9 overflow-hidden rounded-xl w-full mx-7">
        <h1 className="text-3xl text-white text-center py-3 bg-[#494949]">{`(what to add here ?)`}</h1>
        <div className="grid h-full lg:grid-cols-3 grid-cols-1 bg-[#ECE8D9]">
          <div className="w-full h-full flex flex-col">
            <h2 className="px-5 text-center bg-gray-300 w-full py-2 text-xl">
              Atmosphere
            </h2>
            <div className="m-auto lg:py-16 py-5">
              <p className="text-lg px-5">
                Photolysis is the process by which oxygen is released in the
                atmosphere. In the process, high-energy sunlight breaks apart
                oxygen-bearing molecules to produce free oxygen.
              </p>
              <p className="text-lg px-5">
                The ozone cycle is an outcome of the photolysis process. An
                oxygen molecule (O2) is broken down to atomic oxygen by the
                ultraviolet radiation of sunlight. This free oxygen then
                recombines with existing O2 molecules to make O3 or ozone. This
                cycle is important because it helps to shield the Earth from the
                majority of harmful ultraviolet radiation by turning it into
                harmless heat before it reaches the Earth’s surface.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col bg-[#cfccbe]">
            <h2 className="px-5 text-center bg-slate-400 text-white w-full py-2 text-xl">
              Biosphere
            </h2>
            <div className="m-auto py-5">
              <p className="text-lg px-5">
                In the biosphere, the main processes in the oxygen cycle are
                respiration and photosynthesis. During respiration animals and
                humans breathe by consuming oxygen to be used in the metabolic
                process and exhale carbon dioxide.
              </p>
              <p className="text-lg px-5">
                Photosynthesis is the reverse of this process and is done by
                plants and plankton
              </p>
            </div>
            <div className="mx-auto space-x-4 pb-3 invisible lg:visible">
              <Link href="/ocyc">
                <a className="font-bold pt-4 text-[#3e4866]">🡠 Previous Page</a>
              </Link>
              <Link href="/ocyc/3">
                <a className="font-bold pt-4 text-[#3e4866]">Next Page 🡢</a>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col bg-[#b4b1a5]">
            <h2 className="px-5 text-center bg-zinc-500 text-white w-full py-2 text-xl">
              Lithosphere
            </h2>
            <div className="m-auto py-5">
              <p className="text-lg px-5">
                In the lithosphere, oxygen is fixed and trapped in minerals such
                as silicates and oxides. This is the natural process of
                oxidation, when a pure element comes in contact with oxygen it
                gets oxidized.
              </p>
              <p className="text-lg px-5">
                A portion of the oxygen is freed by chemical weathering. When an
                oxygen-bearing mineral is exposed to the elements a chemical
                reaction occurs that wears it down and in the process produces
                free oxygen.
              </p>
            </div>
            <div className="mx-auto space-x-4 pb-3 lg:hidden">
              <Link href="/ocyc">
                <a className="font-bold pt-4 text-[#3e4866]">🡠 Previous Page</a>
              </Link>
              <Link href="/ocyc/3">
                <a className="font-bold pt-4 text-[#3e4866]">Next Page 🡢</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );u
}
