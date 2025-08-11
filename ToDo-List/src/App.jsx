import {useState} from 'react';

function App(){
const [tasks, setTasks] = useState("");
const [todos, setTodos] = useState([]);

const todoElements = todos.map(todo =>(
  <div key={todo.id} >
    <div className='flex justify-between items-center '>
      <div className='flex items-center space-x-4 text-[22px]'>
      <input type="checkbox" onChange={e => {e.target.nextElementSibling.style.textDecoration = e.target.checked ? "line-through" : "none"}}/>
      <span>{todo.tasks}</span>
    </div>
    <button onClick={()=> deleteTasks(todo.id)} className='bg-[#ececec] rounded-full p-3'>Delete</button>
    </div>
    <hr className='text-[#ececec] mt-3' />
  </div>
))

function deleteTasks(id){
  setTodos(prevTodos => prevTodos.filter(todo => todo.id!== id))
}
function addTasks(){
  if (tasks.trim() === "") return;
  setTodos(prevTodos => [...prevTodos, {id:Date.now(), tasks}]);
  setTasks("")
}

  return (
    <div>
      <h1 className='text-[#ececec] text-[92px] text-center'>todos</h1>
      <div className=' border-2 border-gray-300 w-[80%] mx-auto p-4 rounded-full flex justify-between items-center shadow-md px-10'>
        <input type="text" value={tasks} onChange={e=> setTasks(e.target.value)} placeholder='Add todo...' className='w-[90%] focus:outline-none' />
        <button onClick={addTasks} className='bg-blue-400 text-white font-bold w-7 h-7 text-[22px] rounded-full flex items-center justify-center'>+</button>
      </div>
      <div className='w-[80%] mx-auto mt-10 space-y-4'>
        {todoElements}
      </div>
    </div>
  )
}

export default App;