import React, { useState } from 'react';
import '../css/Design.css';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CallT from './CallT'

function TodoList(){
    const [input,setInput]=useState("");
    const [inputar,setInputar]=useState([]);
    
const first=(e)=>{
setInput(e.target.value);
}

const set=()=>{
setInputar((pre)=>{
return [...pre,input]
}
);
setInput(" ");
}

// function deletei(id){
//     setInputar((pre)=>{
// return pre.filter((arr,index)=>{
//     return index !=id;
// })
//     })
// }
    return(
<div className="todo-in">

<div>

<h1 className="hha">
<PlaylistAddCheckIcon />   
    ToDo List</h1>
</div>
<div className="ffl">
<TextField id="outlined-basic" label="Enter ToDo"  value={input} onChange={first}/>
<Button variant="contained" className="bvc" onClick={set}>
        <AddIcon style={{color : "white" }} />
      </Button>
</div>

<div>
    <ul className="listbb">
    {inputar.map((val,index)=>{
return <CallT  key={index} value={val}
id={index} 

/>
            })}
        
    </ul>
</div>
</div>

    )
}

export default TodoList;