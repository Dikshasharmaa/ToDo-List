import './App.css';
import Header from './MyComponents/Header';
import { ToDos}  from './MyComponents/ToDos';
import  { todo}  from './MyComponents/todo items';
import  { Footer}  from './MyComponents/Footer';

function App() {
  let todo = [
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
  ]
  return (
    <>
    <Header title="MyToDoList" searchBar={true}></Header>
    <ToDos todo = {todo}></ToDos>
    <todo></todo>
    <Footer></Footer>
    </>
  );
}

export default App;
