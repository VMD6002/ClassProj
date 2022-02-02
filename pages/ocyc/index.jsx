import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="px-7 py-5 flex min-h-screen bg-[#FAF6E9]">
      <Head>
        <title>Oxygen Cycle</title>
      </Head>
      <div className="m-auto overflow-hidden bg-[#ECE8D9] w-[95%]">
        <h2 className="text-2xl py-3 text-stone-100 bg-[#494949] px-5">
          Oxygen Cycle
        </h2>
        <div className="py-[3%] lg:py-2">
          <div className="flex lg:flex-row flex-col md:space-x-6 px-5">
            <div>
              <p className="text-lg">
                Oxygen cycle, along with the carbon cycle and nitrogen cycle
                plays an essential role in the existence of life on the earth.
                The oxygen cycle is a biological process which helps in
                maintaining the oxygen level by moving through three main
                spheres of the earth which are:
              </p>
              <ul className="text-lg">
                <li>Atmosphere</li>
                <li>Biosphere</li>
                <li>Lithosphere</li>
              </ul>
              <p className="text-lg">
                This biogeochemical cycle explains the movement of oxygen gas
                within the atmosphere, the ecosystem, biosphere and the
                lithosphere. The oxygen cycle is interconnected with the carbon
                cycle.
              </p>
              <p className="text-lg">
                The atmosphere is the layer of gases presents above the earth’s
                surface. The sum of Earth’s ecosystems makes a biosphere.
                Lithosphere is the solid outer section along with the earth’s
                crust and it is the largest reservoir of oxygen.
              </p>
            </div>
            <div>
              <img
                className="h-60 lg:mx-px lg:w-[800px] mx-auto w-max py-4"
                src="https://cdn1.byjus.com/wp-content/uploads/2018/02/Oxygen-Cycle-min.png"
                alt="hello"
              />
            </div>
          </div>
          <h2 className="px-5 bg-[#494949] text-white w-max mx-5 rounded-md py-2 text-xl">
            Stages of the Oxygen Cycle
          </h2>
          <div className="flex flex-col w-full px-5 py-3">
            <p className="text-xl">
              The steps involved in the oxygen cycle are:
            </p>
            <p>
              <b>Stage-1:</b> All green plants during the process of
              photosynthesis, release oxygen back into the atmosphere as a
              by-product.
            </p>
            <p>
              <b>Stage-2: </b>All aerobic organisms use free oxygen for
              respiration.
            </p>
            <p>
              <b>Stage-3:</b> Animals exhale Carbon dioxide back into the
              atmosphere which is again used by the plants during
              photosynthesis. Now oxygen is balanced within the atmosphere.
            </p>
            <div className="mx-auto space-x-4 pt-3">
              <Link href="/ocyc/2">
                <a className="font-bold pt-4 text-[#3e4866]">Next Page 🡢</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
