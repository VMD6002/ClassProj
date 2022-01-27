import Head from "next/head"

export default function Creds(){
    return(
        <div className="flex min-h-screen w-full">
            <Head>
                <title>Credits</title>
            </Head>
            <div className="m-auto flex flex-col bg-stone-700 h-[90%] w-11/12 max-w-none py-[3%] rounded-lg prose prose-invert lg:prose-lg">
                <button className="text-center text-5xl pb-5 focus:pb-12 focus:pt-6 text-white duration-200 font-extrabold mx-auto focus:scale-150">Website Made my <span className="px-5 rounded-xl py-1 bg-slate-500">Dilshad</span></button>
                <h1 className="text-center">Oxygen Cycle </h1>
                <h1 className="text-center">Nitrogen Cycle Azwin</h1>
                <h1 className="text-center">Biogeochmical Cycle Hrishi</h1>
                <h1 className="text-center">Diffrence Between ... Fitha</h1>
                <h1 className="text-center">Water Cycle Devika</h1>
                <h1 className="text-center">Carbon Cycle Diya</h1>
            </div>
        </div>
    )
}