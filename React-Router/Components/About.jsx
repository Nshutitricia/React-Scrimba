export default function About(){

    return(
        <section>
            <img src="./img/about.svg" alt=""  className="w-screen "/>
            <h1 className=" mx-auto mt-4 w-[80%] text-[32px] font-bold mt-10">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className=" w-[80%] mx-auto mt-4 text-[16px]">Our mission is to enliven the wanderlust in all of us by offering a wide selection of vans for every type of trip. Whether you’re looking for a weekend getaway or a cross-country adventure, we have the perfect van for you.</p>
            <p className=" w-[80%] mx-auto mt-4 text-[16px]">Join the #vanlife movement and experience the freedom of the open road. With our easy booking process and 24/7 customer support, your next adventure is just a click away.</p>
            <div className="mx-auto mt-4 w-[80%] bg-[#FFCC8D] font-bold mt-10  rounded-lg">
                <div className="p-10 mb-15">
                    <h1 className="text-[24px]">Your destination is waiting.</h1>
                    <h1 className="text-[24px]">Your van is ready.</h1>
                    <button className="bg-black text-white font-bold p-4 rounded-xl mt-6">Explore our vans</button>
                </div>
                
            </div>
        </section>
    )
}