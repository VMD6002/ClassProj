import Head from "next/head";

export default function Page1() {
  return (
    <div>
      <div className="flex py-4 min-h-screen">
        <Head>
          <title>Nitrogen Cycle</title>
        </Head>
        <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-stone-400">
          <h1 className="text-2xl uppercase text-center py-3 bg-stone-900 rounded-t-lg text-white">
            Nitrogen Cycle
          </h1>
          <div className="m-auto py-4 w-11/12 text-gray-800 prose prose-invert max-w-none ">
            <p className="text-lg space-y-2">
                <blockquote className="text-lg text-black">
                Nitrogen is the important essential element for all living
                organisms by the synthesis of Amino acid,Proteins,Enzymes etc.
                </blockquote>
              <h2 className="text-black">What Happens If there is no nitrogen?</h2>
              <ul>
                  <li>Root system and plant growth are stunted.</li>
                  <li>Older leaves turn yellow.</li>
                  <li>Decrease in crop production.</li>
                  <li>Soil micro - organisms life become dangerous.</li>
              </ul>
            </p>
            <blockquote className="text-black">In atmosphere Nitrongens concentration is 78%.</blockquote>
            <p className="text-lg">
            The circulation or cyclic movement of Nitrogen from the atmosphere ( physical or biotic component) to soil( biotic component) And back into the atmosphere is known as Nitrogen cycle.
            </p>
            <h2 className="text-black"> There are various steps for Nitrogen Cycle.</h2>
            <ul className="list-decimal text-slate-900">
                <li>Nitrogen Fixation</li>
                <li>Nitrogen Assimilation</li>
                <li>Ammonification</li>
                <li>Nitrification</li>
                <li>Denitrification</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
