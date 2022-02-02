import Head from "next/head";

export default function Hycyc() {
  return (
    <div className="flex min-h-screen py-6 bg-[#FAEEE0]">
      <Head>
        <title>Hydrogen Cycle</title>
      </Head>
      <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-[#F9E4C8]">
        <h1 className="text-3xl uppercase text-center py-3 bg-[#FFB085] rounded-t-lg text-white">
          Hydrogen cycle
        </h1>
        <img className="h-[500px] mx-auto py-[3%]" src="https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/4/d/4d0ebb327855aebc23d757054787907c7f59b8530e44dc9518805868e5caeb5e/hydrogen-cycle-mc-slide1.png" alt="" />
        <div className="m-auto pb-[3%] text-6xl w-11/12">
          <p className="text-xl">
            The hydrogen cycle consists of hydrogen exchanges between biotic
            (living) and abiotic (non-living) sources and sinks of
            hydrogen-containing compounds.
          </p>
          <p className="text-xl">
            Hydrogen (H) is the most abundant element in the universe.[1] On
            Earth, common H-containing inorganic molecules include water (H2O),
            hydrogen gas (H2), hydrogen sulfide (H2S), and ammonia (NH3). Many
            organic compounds also contain H atoms, such as hydrocarbons and
            organic matter. Given the ubiquity of hydrogen atoms in inorganic
            and organic chemical compounds, the hydrogen cycle is focused on
            molecular hydrogen, H2.
          </p>
          <p className="text-xl">
            Hydrogen gas can be produced naturally through rock-water
            interactions or as a byproduct of microbial metabolisms. Free H2 can
            then be consumed by other microbes, oxidized photochemically in the
            atmosphere, or lost to space. Hydrogen is also thought to be an
            important reactant in pre-biotic chemistry and the early evolution
            of life on Earth, and potentially elsewhere in our solar system.
          </p>
        </div>
      </div>
    </div>
  );
}
