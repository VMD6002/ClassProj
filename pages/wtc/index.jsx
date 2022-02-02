import Head from "next/head";

export default function Page1() {
  return (
    <div>
      <div className="flex py-4 min-h-screen bg-[#E7E0C9]">
        <Head>
          <title>Water Cycle</title>
        </Head>
        <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-[#C1CFC0]">
          <h1 className="text-2xl uppercase text-center py-3 bg-[#6B7AA1] rounded-t-lg text-white">
            Water Cycle
          </h1>
          <img className="h-[500px] py-[3%] mx-auto py-[3%]" src="https://www.worldatlas.com/r/w1200/upload/b7/e8/4a/transpiration.png" alt="" />
          <div className="m-auto pb-[3%] w-11/12 text-[#11324D]">
            <p className="text-lg">
              The water cycle, also known as the hydrologic cycle or the
              hydrological cycle, is a biogeochemical cycle that describes the
              continuous movement of water on, above and below the surface of
              the Earth. The mass of water on Earth remains fairly constant over
              time but the partitioning of the water into the major reservoirs
              of ice, fresh water, saline water (Salt Water) and atmospheric
              water is variable depending on a wide range of climatic variables.
              The water moves from one reservoir to another, such as from river
              to ocean, or from the ocean to the atmosphere, by the physical
              processes of evaporation, condensation, precipitation,
              infiltration, surface runoff, and subsurface flow. In doing so,
              the water goes through different forms: liquid, solid (ice) and
              vapor.The water cycle involves the exchange of energy, which leads
              to temperature changes. When water evaporates, it takes up energy
              from its surroundings and cools the environment. When it
              condenses, it releases energy and warms the environment. These
              heat exchanges influence climate.
            </p>
            <p className="text-lg">
              The evaporative phase of the cycle purifies water which then
              replenishes the land with freshwater. The flow of liquid water and
              ice transports minerals across the globe. It is also involved in
              reshaping the geological features of the Earth, through processes
              including erosion and sedimentation. The water cycle is also
              essential for the maintenance of most life and ecosystems on the
              planet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
