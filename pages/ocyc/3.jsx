import Head from "next/head";

export default function Page3() {
  return (
    <div className="flex h-screen">
      <Head>
        <title>Oxygen cycle page 3</title>
      </Head>
      <div className="m-auto rounded-lg grid grid-cols-1 lg:grid-cols-2 w-11/12 h-[90%] bg-black">
        <div className="bg-slate-500 flex flex-col rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
          <h1 className="bg-stone-600 uppercase rounded-t-lg lg:rounded-tl-lg lg:rounded-tr-none text-slate-200 text-2xl text-center py-2">
            The processes that produce oxygen
          </h1>
          <div className="my-auto">
            <ul className="py-10 space-y-10 text-stone-800 text-lg lg:text-xl">
              <li>
                Photosynthesis is a biological process by which all green plants
                synthesize their food in the presence of sunlight. During
                photosynthesis, plants use sunlight, water, carbon dioxide to
                create energy, and oxygen gas is liberated as a by-product of
                this process.
              </li>
              <li>
                Sunlight also produced oxygen through reaction with water vapor
                in the atmosphere.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-zinc-500 flex flex-col rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
          <h1 className="bg-gray-600 uppercase lg:rounded-tr-lg text-slate-300 text-2xl text-center py-2">
            The processes that consume oxygen
          </h1>
          <div className="my-auto">
            <ul className="space-y-10 py-10 text-lg text-stone-800">
              <li>
                Breathing is the physical process, through which all living
                organisms, including plants, animals, and humans inhale oxygen
                from the environment into the cells and exhale carbon dioxide
                back into the atmosphere.
              </li>
              <li>
                {`Decomposition is an important part of the oxygen cycle and occurs after the death of an organism. The dead organism decays and the organic matter with carbon, oxygen, water, and other components are returned into the soil and air. This process is carried out by decomposers like invertebrates (fungi, bacteria, and some insects. The entire process consumes oxygen and releases carbon dioxide.`}
              </li>
              <li>
                Combustion occurs when the organic and inorganic matter is
                burned in the presence of oxygen.
              </li>
              <li>Rusting is the process of oxidation of metals and alloys</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
