export default function Button(){
     const buttons = [1,2,3]
     const buttonsElements = buttons.map((button,index)=> <button key={index} onClick={()=> alert(`You clicked on Button ${button}`)} className="border-2 bg-gray-400"> Click Me {button} </button>)
    
     return(
       <div className="flex justify-center gap-4 m-7">
        {buttonsElements}
       </div>
     )
}