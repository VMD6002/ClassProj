import Head from "next/head";

export default function Crcb() {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Carbon Cycle</title>
      </Head>
      <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-stone-300">
        <h1 className="text-3xl py-4 uppercase text-center bg-stone-900 rounded-t-lg text-white">
          Carbon cycle
        </h1>
        <div className="grid grid-col-2 py-[3%] m-auto space-y-6 text-6xl w-11/12">
          <div className="rounded-xl overflow-hidden m-auto">
            <img
              className="min-65"
              src="https://eschooltoday.com/learn/wp-content/uploads/2020/10/Illustration-of-the-carbon-cycle.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="text-xl">
              The carbon cycle describes the process in which carbon atoms
              continually travel from the atmosphere to the Earth and then back
              into the atmosphere. ... Carbon is released back into the
              atmosphere when organisms die, volcanoes erupt, fires blaze,
              fossil fuels are burned, and through a variety of other
              mechanisms.Carbon is the foundation of all life on Earth, required
              to form complex molecules like proteins and DNA. This element is
              also found in our atmosphere in the form of carbon dioxide (CO2).
              Carbon helps to regulate the Earth’s temperature, makes all life
              possible, is a key ingredient in the food that sustains us, and
              provides a major source of the energy to fuel our global
              economy.Since our planet and its atmosphere form a closed
              environment, the amount of carbon in this system does not
              change.On Earth, most carbon is stored in rocks and sediments,
              while the rest is located in the ocean, atmosphere, and in living
              organisms. These are the reservoirs, or sinks, through which
              carbon cycles.Humans play a major role in the carbon cycle through
              activities such as the burning of fossil fuels or land
              development.As a result, the amount of carbon dioxide in the
              atmosphere is rapidly rising; it is already considerably greater
              than at any time in the last 800,000 years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
