export default function List({list}){
    return (
        <div className="border-2 w-40 ">
            {list.map((animal)=> 
            <div key={animal} className=" border-b flex justify-center items-center h-10">
                {animal}
            </div>
            )}
        </div>
    )
}