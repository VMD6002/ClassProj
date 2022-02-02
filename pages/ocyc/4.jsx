import Head from "next/head";
import Link from "next/link";

export default function Page4() {
  return (
    <div className="flex min-h-screen bg-[#FAF6E9]">
      <Head>
        <title>Oxygen Cycle Page 4</title>
      </Head>
      <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-[#ECE8D9]">
        <h1 className="text-3xl uppercase text-center py-3 bg-[#494949] rounded-t-lg text-white">
          Human influence on the oxygen cycle
        </h1>
        <div className="m-auto py-[10%] text-6xl w-11/12">
          <p className="text-xl">
            The anthropogenic activities are affecting the oxygen cycle also
            along with other biogeochemical cycles.
          </p>
          <p className="text-xl">
            Fossil fuel combustion, respiration of humans and livestock, and
            wildfire are significant high Oxygen consumption activities. Areas
            like East Asia, India, eastern North America, Europe, and central
            Africa have high consumption rates due to dense population. While in
            regions of central Africa, the wildfire accounts for the majority of
            local Oxygen consumption.
          </p>
          <p className="text-xl">
            Even after the excessive burning of fossil fuel and the reduction of
            the natural vegetation on both land and in the sea, the level of
            atmospheric oxygen seems to be relatively stable which may be
            because of the increase in plant productivity due to agricultural
            advances worldwide.
          </p>
        </div>
        <div className="mx-auto space-x-4 pb-5">
          <Link href="/ocyc/3">
            <a className="font-bold pt-4 text-[#3e4866]">🡠 Previous Page</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
