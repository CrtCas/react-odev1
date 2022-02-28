import React, { useState } from 'react'
import "./style.css"

function List({all,setAll,filtered}) {
    const [input,setInput] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        setAll([...all,{text:input,comp_state:false}])
        setInput("")
    }
    const completeHandler = (e,item,index)=>{
        setAll(all.map(( current)=>{
            if(item === current){
                return {...item, comp_state:!item.comp_state}
            } 
            return current  
        }))
    }

    const destroyHandler = (e,item)=>{
        setAll(all.filter((current)=> current !==item ))
    }
  return (
    <div>
        <header className="header">
		    <h1>todos</h1>
		    <form onSubmit={(e)=>{
                submitHandler(e)}}>
			    <input className="new-todo" placeholder="What needs to be done?" name='text' value={input} onChange={(e)=>{
                    setInput(e.target.value) 
                }} />
		    </form>
	    </header>

        <section className="main">
            <ul className="todo-list">
                {
                    filtered.map((item,index)=>(
                        <li key={index} className={`${item.comp_state ? "completed" : ""}`}>
                            <div className="view">
                                <input className="toggle" type="checkbox" onClick={(e)=>completeHandler(e,item,index)}/>
                                <label >{item.text}</label>
                                <button className="destroy" onClick={(e)=>destroyHandler(e,item)}></button>
                            </div>
                            </li>  
                            ))
                }
            </ul>
        </section>
    </div>
  )
}

export default List