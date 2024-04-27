import React from 'react'
export const ToDos = ({todos,onDelete}) => {
  return (
    <div className="container">
        <h3 className='text-center'>ToDo List</h3>
        {todos.map(item =>(<div className='todo' key={item.sno}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button className='btn btn-sm btn-danger'onClick ={()=>{onDelete(item)}}>Delete </button>
        </div>))
        }

        </div>
  );
}