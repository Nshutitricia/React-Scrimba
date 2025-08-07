export default function Form(){
    let list = ["Home", "Exercise", "Exercise2", "Exercise3", 'Exercise4', 'Exercise5'];
    let nameList = list.map((item) => <a key={item} className="underline text-blue-400">{item} </a> );
    function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        const first = formData.get('firstName');
        const last = formData.get('lastName');
        alert(`Hello ${first} ${last}`);
        e.currentTarget.reset(); 
    }
    return(
        <>
            <ul className="flex  items-center justify-center gap-4 p-4">
            {nameList}
            </ul>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 p-5 ">
                <input type="text" name='firstName' placeholder="FirstName" className="border-2 rounded-lg p-3" />
                <input type="text" name="lastName" placeholder="LastName" className="border-2 rounded-lg p-3" />
                <button className="border-2 rounded-lg p-3 bg-pink-500 w-50 text-white">Greet Me</button>
            </form>
        </>
        
    )
}