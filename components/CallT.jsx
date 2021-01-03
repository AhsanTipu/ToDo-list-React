import React, { useState } from 'react';
import "../css/Design.css";

import DeleteIcon from '@material-ui/icons/Delete';
function CallT(props){
    const [line,setLine]=useState(false);
const delt=()=>{
setLine(true)
}
// onClick={()=>{[
//     props.select(props.id)
// ]}}
return(
<div style={{display : 'flex'}}>
    <button className="nzx"  onClick={delt}><DeleteIcon className="delle"/></button>

<li style={{textDecoration : line ? 'line-through' : 'none' }}>{props.value}</li>
</div>

) 
    
}

export default CallT;