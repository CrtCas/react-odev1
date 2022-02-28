import React from 'react'
import "./style.css"

function Filter({setStatus,filtered,all,setAll}) {

    const statusHandler = (e) => {
        setStatus(e.target.value);      
    }
    const clearHandler = () =>{
        setAll(all.filter((item)=> item.comp_state===false))
      }

  return (
    <div>
        <footer className="footer">
            <span className="todo-count">
                <strong>{filtered.length}</strong> items left
            </span>

        <ul className="filters">
            <li>
                <button value={"all"} onClick={statusHandler} >All</button>
            </li>
            <li>
                <button value={"uncomplete"} onClick={statusHandler} >Active</button>
            </li>
            <li>
                <button value={"complete"} onClick={statusHandler} >Completed</button>
            </li>
        </ul>

        <button className="clear-completed" onClick={clearHandler} >
            Clear completed
        </button>
        </footer>
    </div>
  )
}

export default Filter