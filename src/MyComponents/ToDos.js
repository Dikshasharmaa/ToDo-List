import React from 'react'
export const ToDos = ({todos,onDelete}) => {
  let myStyle ={
    minHeight: "70vh",
  }
  return (
    
    <div className="container" my-3 style ={myStyle}>
        <h3 className='text-center'>ToDo List</h3>
        {todos.length ===0? "No ToDos to display":   
        todos.map(item =>(<div className='todo' key={item.sno}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button className='btn btn-sm btn-danger'onClick ={()=>{onDelete(item)}}>Delete </button> <hr></hr>
        </div>))
        }

        </div>
  );
}
