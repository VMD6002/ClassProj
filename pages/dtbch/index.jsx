import Head from "next/head";
import Link from "next/link";

export default function DTBCH() {
  const DBCC = [
    {
      name: "Water Cycle",
      img: "https://www.worldatlas.com/r/w1200/upload/b7/e8/4a/transpiration.png",
    },
    {
      name: "Carbon cycle",
      img: "https://eschooltoday.com/learn/wp-content/uploads/2020/10/Illustration-of-the-carbon-cycle.jpg",
    },
    {
      name: "Oxygen Cycle",
      img: "https://cdn1.byjus.com/wp-content/uploads/2018/02/Oxygen-Cycle-min.png",
    },
    {
      name: "Nitrogen cycle",
      img: "https://microbiologysociety.org/static/0c06a39d-4cfa-47ee-9c4cc314739954ac/600x400_highestperformance_/NC-1.jpg",
    }
  ];

  return (
    <div className="flex flex-grow py-4 min-h-screen bg-[#FEF1E6]">
      <Head>
        <title>Different Type of Biogeo Chemical Cycle</title>
      </Head>
      <div className="flex flex-col m-auto rounded-lg overflow-hidden h-[90%] w-11/12 bg-[#FCDEC0]">
        <h1 className="text-2xl uppercase text-center py-3 bg-[#90AACB] text-white">
          different type of biogeo chemical cycle
        </h1>
        <div className="m-auto py-[5%] w-11/12 text-[#632626]">
          <p className="text-lg">
            The biogeochemical cycles can be divided into two types, the gaseous
            biogeochemical cycle and sedimentary cycle,Based on their reservoir.
            The gaseous cycles exist in the atmosphere or Oceans through
            evaporation. There are different types of gaseous cycles like the
            nitrogen cycle, oxygen cycle, carbon cycle, and the water cycle.
          </p>
          <p className="text-lg">
            The second type which is the sedimentary cycles who has the earth’s
            crust as the reservoir pool. These include the chemical components
            that are more earthbound like iron, calcium, sulphur etc. The
            gaseous cycles move more rapidly when compared to the sedimentary
            cycles. large atmospheric reservoir would be the reason of this.
          </p>
          <h1 className="text-2xl py-4">ɴᴏᴡ, ʟᴇᴛꜱ ꜱᴇᴇ ᴡʜᴀᴛ ᴀʀᴇ</h1>
          <div className="grid md:grid-cols-3 space-y-4 lg:space-y-0 lg:grid-cols-4">
            {DBCC.map((det) => (
              <div key="s">
                <div className="w-11/12 flex flex-col m-auto duration-100 rounded-md">
                  <li className="font-mono">{det.name}</li>
                  <img className="m-auto pt-4 lg:h-40" src={det.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
