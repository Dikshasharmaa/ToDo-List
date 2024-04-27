import "./App.css";
import Header from "./MyComponents/Header";
import { ToDos } from "./MyComponents/ToDos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am deleting this task", todo);

    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, description) => {
    console.log("I am adding this todo", title, description);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myToDo = {
      sno: sno,
      title: title,
      description: description,
    };
    settodos([...todos, myToDo]);
    console.log(myToDo);
  };
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const listItems = todos.map((todo) => {
  //   <li>{todo}</li>
  // })
  return (
    <>
      <Header title="MyToDoList" searchBar={true} />
      <AddTodo addTodo={addTodo}></AddTodo>
      <ToDos todos={todos} onDelete={onDelete}></ToDos>
      <Footer />
    </>
  );
}

export default App;
