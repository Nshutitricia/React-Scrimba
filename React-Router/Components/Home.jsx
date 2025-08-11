export default function Home(){

    return(
       <header className="relative bg-[url('./img/van.png')] bg-cover  bg-center h-[500px] flex flex-col justify-center items-center text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative">
            <h1 className="font-bold text-[24px]">You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement.</p>
            <p>Rent the perfect can to make your perfect road trip.</p>

            <button className="bg-[#ff8c38] p-3 w-[90%] mt-10 font-bold">Find your van</button>
        </div>
       </header>
    )
}