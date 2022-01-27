import Head from "next/head";

export default function DTBCH() {
  return (
    <div className="flex py-4 min-h-screen">
      <Head>
        <title>Different Type of Biogeo Chemical Cycle</title>
      </Head>
      <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-stone-400">
        <h1 className="text-2xl uppercase text-center py-3 bg-stone-900 rounded-t-lg text-white">
          different type of biogeo chemical cycle
        </h1>
        <div className="m-auto py-[5%] w-11/12 text-gray-800">
          <p className="text-lg">
            The biogeochemical cycles can be divided into two types, the gaseous
            biogeochemical cycle and sedimentary cycle,Based on their reservoir.
            The gaseous cycles exist in the atmosphere  or Oceans
            through evaporation. There are different types of gaseous cycles
            like the nitrogen cycle, oxygen cycle, carbon cycle, and the water
            cycle.
          </p>
          <p className="text-lg">
            The second type which is the sedimentary cycles who has the earth’s
            crust as the reservoir pool. These include the chemical components
            that are more earthbound like iron, calcium, sulphur etc. The
            gaseous cycles move more rapidly when compared to the sedimentary
            cycles. large atmospheric reservoir would be the reason of this.
          </p>
          <h1 className="text-2xl py-4">ɴᴏᴡ, ʟᴇᴛꜱ ꜱᴇᴇ ᴡʜᴀᴛ ᴀʀᴇ</h1>
          <ul>
            <li className="font-mono">Water Cycle</li>
            <li>Carbon cycle</li>
            <li className="font-mono">Oxygen Cycle</li>
            <li>Nitrogen cycle</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
