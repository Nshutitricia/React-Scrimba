export default function Header(){

    function handleClick() {
        alert("Clicked!")
    }
    return(
        <div className="flex flex-col items-center">
            <ul className="flex gap-4 underline text-blue-500">
                <a href="#">Home</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 1</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 2</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 3</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 4</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 5</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 6</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 7</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 8</a>
                <hr className="border-2 h-4 mt-1.5" />
                <a href="#">Exercise 9</a>
            </ul>
            <button onClick={handleClick}  className="border-2 bg-gray-500 px-4 m-7 ">Click Me!</button>
        </div>
    )
}