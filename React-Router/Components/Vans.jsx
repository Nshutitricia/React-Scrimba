import{useEffect , useState} from 'react';
import { Link, useSearchParams,useLoaderData } from 'react-router';
import { getVans } from '../src/api';

export function loader(){
    return getVans()
}

export default function Vans(){
const vans = useLoaderData()


const [searchParams,setSearchParams] = useSearchParams()
const typeFilter = searchParams.get('type')

console.log(typeFilter)

const [error,setError] = useState(null)

const displayVans = typeFilter ?  vans.filter(van => van.type.toLowerCase()=== typeFilter) : vans

const vansElement = displayVans.map(van=> (
    <Link to={van.id} key={van.id}
    state={{search: `?${searchParams.toString()}`, type:typeFilter}}
    aria-label={`View details for ${van.name }`}>
        <div  className='bg-white p-4 rounded-lg shadow-md'>
        <img src={van.imageUrl} alt={van.name} className='' />
        <div className='flex justify-between w-full mt-4 font-bold text-[20px]'>
            <h2 >{van.name}</h2>
            <span>${van.price}</span>
        </div>
        
        <button className={` ${van.type.toLowerCase() === "simple" ? "bg-[#E17654]":
                            van.type.toLowerCase() === "luxury" ? "bg-black ": "bg-[#115E59] " }
                        p-2 rounded-lg px-4 mt-2 text-white font-bold`}>{van.type}</button>
    </div>
    </Link>
    
))

function handleFilterChange(key,value){
    setSearchParams(prevParams =>{
        if(value ===null){
            prevParams.delete(key)
        }else{
            prevParams.set(key,value)
        }
        return prevParams
    })
}

if(error){
    return <h1>There was an error : {error.message}</h1>
}
    return(
        <div className="flex flex-col items-center gap-4 p-4">
           <h1 className="font-bold text-[32px]">Explore our van options</h1> 
           <div className="flex gap-4 ">
                <button onClick={()=> handleFilterChange("type","simple")} className={`   p-2 rounded-lg px-4 text-[#4D4D4D] ${typeFilter ==="simple" ? "bg-[#E17654] text-white" : " bg-[#FFEAD0] hover:bg-[#E17654] hover:text-white"}`}>Simple</button>
                <button onClick={()=> handleFilterChange("type","luxury")} className={` p-2 rounded-lg px-4 text-[#4D4D4D] ${typeFilter ==="luxury" ? "bg-black text-white" : " bg-[#FFEAD0] hover:bg-black hover:text-white"}`}>Luxury</button>
                <button onClick={()=> handleFilterChange("type","rugged")} className={` p-2 rounded-lg px-4 text-[#4D4D4D] ${typeFilter ==="rugged" ? "bg-[#115E59] text-white" : " bg-[#FFEAD0] hover:bg-[#115E59]hover:text-white"}`}>Rugged</button>
                {typeFilter ? (<button onClick={()=> handleFilterChange("type",null)} className=" underline text-[#4D4D4D]">Clear Filters</button>): null}
           </div>
           
           <div className='grid grid-cols-2'>
                {vansElement}
           </div>
        </div>
    )
}