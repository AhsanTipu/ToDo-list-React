import React, { useState } from 'react';
import "../css/Design.css"

const ToDo = (props) =>{
const [inputlist,setIP]=useState("");
const [item,setItem]=useState([]);

function getItem(events){
    setIP(events.target.value)
}

function click(){
    setItem((old)=>{
        return[...old,inputlist]
        })
        setIP(" ");
        console.log(item)
}
function deleteItem(){
console.log(item);

setItem((old)=>{
return old.filter((arr,index)=>{

})
})
}
    return(
<div className="todo-in">
    {/* <br /> */}
<h1 className="h">ToDo List</h1>
<input className="txtf" placeholder="Add ToDo"  onChange={getItem} value={inputlist}/>
<button onClick={click} className="nabtn"><span className="pp">+</span></button>

<div className="todos">
    <ul className="list">
        {item.map((val,index)=>{
return <li className="item">
    <button className="nazbtn" onClick={deleteItem}><span className="ppa">X</span></button>
    {val}</li>
        })}
    </ul>
</div>
</div>
    )
}

export default ToDo;