import List from "../component/List";
function App(){

  let animals = ['dog','cat', 'chicken', 'cow', 'sheep', 'horse'];
  return(
      <List list={animals} />
  )
}

export default App;