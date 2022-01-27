import Nav from "./nav"

export default function Layout({children}){
    return(
        <>
            <div className="fixed w-full">
                <Nav/>
            </div>
            <div className="">
                {children}
            </div>
        </>
    )
}
