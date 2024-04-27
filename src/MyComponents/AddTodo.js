import React from 'react'
import { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const[title,settile] = useState("");
    const[description,setdescription] = useState("");
    const submit=(e) =>{
        e.preventDefault();
        if(!title || !description){
            alert("Title or description can not be blank");
        }
        addTodo(title,description);

    }
  return (
    <div className='container' my-3><form onSubmit={submit}>
        <h3>Add a To-Do</h3>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" value={title} onChange={(e)=>{settile(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>

    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} className="form-control" id="description"/>
    </div>
    <button type="submit" className="btn btn-sm btn-success">Add</button>
  </form></div>
  )
}
