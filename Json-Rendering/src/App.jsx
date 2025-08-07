import React from 'react';

let data= [
	{
		id: 1,
		setup: "What's the best thing about a Boolean?",
		punchline: "Even if you're wrong, you're only off by a bit"
	},
	{
		id: 2,
		setup: "Why do programmers wear glasses?",
		punchline: "Because they need to C#"
	}
]

let dataList = data.map((item)=> <div key={item.id} className='border-2 rounded-lg p-4 bg-white  '>
  <p className='font-bold text-xl '>{item.setup}</p>
  <p >{item.punchline}</p>
</div>)

function App(){
  return(
    <div className='bg-green-100 h-screen'>
      <div className='flex  items-center justify-center gap-4 p-5 '>
        {dataList}
      </div>

    </div>
  )
}

export default App;