import Head from "next/head";

export default function Page1() {
  return (
    <div>
      <div className="flex py-4 min-h-screen bg-[#DBE6FD]">
        <Head>
          <title>Nitrogen Cycle</title>
        </Head>
        <div className="flex flex-col m-auto rounded-lg h-[90%] w-11/12 bg-[#EEEEEE]">
          <h1 className="text-2xl uppercase text-center py-3 bg-[#47597E] rounded-t-lg text-white">
            Nitrogen Cycle
          </h1>
          <img className="h-[500px] py-[3%] mx-auto py-[3%]" src="https://microbiologysociety.org/static/0c06a39d-4cfa-47ee-9c4cc314739954ac/600x400_highestperformance_/NC-1.jpg" alt="" />
          <div className="m-auto pb-[3%] w-11/12 text-gray-800 prose prose-invert max-w-none ">
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
