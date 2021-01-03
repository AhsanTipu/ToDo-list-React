import logo from './logo.svg';
import './App.css';
import Cards from "./Cards"
import "./css/Design.css"
import Data from "./Data"
import Slot from "./components/Slot"
import Counter from "./components/Counter";
import Time from "./components/Time";
import Events from "./components/Events";
import Forms from "./components/Forms";
import TodoList from  "./components/TodoList"
import ToDo from './components/ToDo'
import { propTypes } from 'react-bootstrap/esm/Image';
import Inc from './components/Inc'
// import item from "./components/ToDo"

// function CallC(val){
//   return(
//   <Cards imgsrc={val.imgsrc} 
//   title={val.title}
//   tag={val.tag}
//   link={val.link}
//   />
//   )
// }
     {/* {Data.map(CallC)};  */}

function App(props) {
  return (
    <div className="App">
    {/* <ToDo /> */}
    <TodoList />
    {/* <Inc /> */}
{/* <h1 className="head">The Slot Machine 🎰</h1>
<Slot x='😏' y='😏' z='😄' />
<Slot x='🖕' y='🖕' z='🖕'  />
<Slot x='🦕' y='😄' z='🎉' /> */}

{/* <Counter /> */}
{/* <Time />
<Forms /> */}
{/* <Events /> */}
    </div>
  );
}

export default App;
