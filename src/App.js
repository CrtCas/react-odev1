import {useState,useEffect} from "react"
import './App.css';
import List from "./Components/List/List";
import Filter from "./Components/Filter/Filter";

// {text:"",comp_state:"uncompleted"} //örnek
function App() {
  const [all,setAll] = useState([])
  const [filtered,setFiltered] = useState([])
  const [status,setStatus] = useState("uncomplete")

  useEffect(()=>{
    console.log(status)
    filterHandler()
  },[status,all])

  const filterHandler = () =>{
    switch (status) {
      case "complete": 
        setFiltered(all.filter((item)=> item.comp_state===true))
        break;
      
      case "uncomplete":
        setFiltered(all.filter((item)=> item.comp_state===false))
        break
    
      default: // all
        setFiltered(all)
        break;
    }
  }

  
  return (
    <div className="App">
      <List all={all} setAll={setAll} filtered={filtered} />
      <Filter setStatus={setStatus} filtered={filtered} all={all} setAll={setAll} />
    </div>
  );
}

export default App;
