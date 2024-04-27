import './App.css';
import Header from './MyComponents/Header';
import { ToDos}  from './MyComponents/ToDos';
import  { Footer}  from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("I am deleting this task",todo);

    settodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTodo = (title,description)=>{
    console.log("I am adding this todo",title,description);
    let sno = todos[todos.length-1].sno +1;
    const myToDo ={
      sno:sno,
      title:title,
      description:description,
    }
    settodos([...todos,myToDo]);
    console.log(myToDo);
  }
  const[todos,settodos] = useState([
    {
      sno :1,
      title : "Complete your Passion project",
      description : "Learn react for you front end"
    },
    {
      sno :2,
      title : "Prepare for your interview",
      description : "Prepare for your mock interview"
    },
    {
      sno :3,
      title : "Do revision for your Quiz",
      description : "Do revise some concepts for your tommorow's quiz"
    },
  ]);

  // const listItems = todos.map((todo) => {
  //   <li>{todo}</li>
  // })
  return (
    <>
    <Header title= "MyToDoList" searchBar={true}/>
    <AddTodo addTodo = {addTodo}></AddTodo>
    <ToDos todos = {todos} onDelete={onDelete}></ToDos>  
    <Footer></Footer>
    </>
  );
}

export default App;
