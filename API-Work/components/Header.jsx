
import React from 'react';
export default function Header(){
    let list = ["Home", "Exercise", "Exercise2", "Exercise3", 'Exercise4', 'Exercise5'];
    let nameList = list.map((item) => <a key={item} className="underline text-blue-400">{item} </a> );
    let data = React.useEffect(()=>{
        fetch('https://random-data-api.com/api/users/random_user?size=10')
        .then(response => response.json())
        .then(data =>{console.log(data)})
    })
    return (
        <div>
            <div className="flex  items-center justify-center gap-4 p-4">
            {nameList}
            </div>
            <form onSubmit="" className="flex flex-col items-center justify-center gap-4 p-5 ">
                <button className="border-2 rounded-lg p-3 bg-red-500 w-50 text-white">Fetch Random</button>
            </form>
            {data && data.map((item) => (
                <div key={item}> 
                    <p>{item}</p>
                </div>
            ) )}

        </div>
    )
}