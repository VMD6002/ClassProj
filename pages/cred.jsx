import Head from "next/head"

export default function Creds(){
    return(
        <div className="flex min-h-screen py-5 w-full bg-gray-300">
            <Head>
                <title>Credits</title>
            </Head>
            <div className="m-auto flex flex-col bg-stone-500 h-[90%] w-11/12 max-w-none py-10 lg:py-[3%] rounded-lg prose prose-invert prose-base lg:prose-lg">
                <h1 className="text-center px-10">Website Made by <span className="rounded-xl py-1">Dilshad</span></h1>
                <h1 className="text-center">Oxygen Cycle </h1>
                <h1 className="text-center px-5">Nitrogen Cycle Azwin</h1>
                <h1 className="text-center px-5">Biogeochmical Cycle Hrishi</h1>
                <h1 className="text-center px-5">Diffrence Types of Bio Geo Chemical Cycle  Fitha</h1>
                <h1 className="text-center px-5">Water Cycle Devika</h1>
                <h1 className="text-center px-5">Carbon Cycle Diya</h1>
                {/* <h1 className="text-center px-5">Hydrogen Cycle Malavika</h1> */}
            </div>
        </div>
    )
}