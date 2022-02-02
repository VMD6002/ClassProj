import Head from "next/head";

export default function Pag1() {
  return (
    <div className="flex min-h-screen py-4 bg-[#EAD3CB]">
      <Head>
        <title>Biogeochemical Cycle</title>
      </Head>
      <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-[#BDC7C9]">
        <h1 className="text-2xl uppercase text-center py-3 bg-[#845460] rounded-t-lg text-white">
          Biogeochemical Cycle
        </h1>
        <img className="h-[500px] mx-auto py-[3%]" src="https://www.sciencefacts.net/wp-content/uploads/2021/07/Biochemical-Cycles.jpg" alt="" />
        <div className="m-auto pb-[3%] w-11/12 text-gray-900">
          <p className="text-lg">
            There are a few types of atoms that can be a part of a plant one
            day, an animal the next day, and then travel downstream as a part of
            a river’s water the following day. These atoms can be a part of both
            living things like plants and animals, as well as non-living things
            like water, air, and even rocks. The same atoms are recycled over
            and over in different parts of the Earth. This type of cycle of
            atoms between living and non-living things is known as a
            biogeochemical cycle.
          </p>
          <p className="text-lg">
            All of the atoms that are building blocks of living things are a
            part of biogeochemical cycles. The most common of these are the
            carbon and nitrogen cycles
          </p>
          <p className="text-lg">
            Tiny atoms of carbon and nitrogen are able to move around the planet
            through these cycles. For example, an atom of carbon is absorbed
            from the air into the ocean water where it is used by little
            floating plankton doing photosynthesis to get the nutrition they
            need. There is the possibility that this little carbon atom becomes
            part of the plankton’s skeleton, or a part of the skeleton of the
            larger animal that eats it, and then part of a sedimentary rock when
            the living things die and only bones are left behind. Carbon that is
            a part of rocks and fossil fuels like oil, coal, and natural gas may
            be held away fromthe rest of the carbon cycle for a long time. These
            long-term storage places are called “sinks”. When fossil fuels are
            burned, carbon that had been underground is sent into the air as
            carbon dioxide, a greenhouse gas.
          </p>
          <p className="text-lg">
            Recently, people have been causing these biogeochemical cycles to
            change. When we cut down forests, make more factories, and drive
            more cars that burn fossil fuels, the way that carbon and nitrogen
            move around the Earth changes. These changes add more greenhouse
            gases in our atmosphere and this causes climate change
          </p>
        </div>
      </div>
    </div>
  );
}
