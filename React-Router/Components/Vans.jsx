import{useEffect , useState} from 'react';


export default function Vans(){
const [vans, setVans] = useState([]);
useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVans(data.vans))
            .catch(error => console.error('Error fetching vans:', error));
}, []); 

const vansElement = vans.map(van=> (
    <div key={van.id} className='bg-white p-4 rounded-lg shadow-md'>
        <img src={van.imageUrl} alt={van.name} className='' />
        <div className='flex justify-between w-full mt-4 font-bold text-[20px]'>
            <h2 >{van.name}</h2>
            <span>${van.price}</span>
        </div>
        
        <button className={` ${van.type.toLowerCase() === "simple" ? "bg-[#E17654]":
                            van.type.toLowerCase() === "luxury" ? "bg-black ": "bg-[#115E59] " }
                        p-2 rounded-lg px-4 mt-2 text-white font-bold`}>{van.type}</button>
    </div>
))
    return(
        <div className="flex flex-col items-center gap-4 p-4">
           <h1 className="font-bold text-[32px]">Explore our van options</h1> 
           <div className="flex gap-4 ">
                <button className="bg-[#FFEAD0] p-2 rounded-lg px-4 text-[#4D4D4D]">Simple</button>
                <button className="bg-[#FFEAD0] p-2 rounded-lg px-4 text-[#4D4D4D]">Luxury</button>
                <button className="bg-[#FFEAD0] p-2 rounded-lg px-4 text-[#4D4D4D]">Rugged</button>
                <button className=" underline text-[#4D4D4D]">Clear Filters</button>
           </div>
           
           <div className='grid grid-cols-2'>
                {vansElement}
           </div>
        </div>
    )
}