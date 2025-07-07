import Header from "../components/Header";
import Entry from "../components/Entry";
import data from "/data"
function App(){
  const dataElements = data.map((entry)=>{
    return (
      <Entry 
        key = {entry.id}
        {...entry}
      />
    )
  })
  return (
    <main>
      <Header />
      {dataElements}
    </main>
  )
}

export default App;