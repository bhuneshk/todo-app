import React, { useEffect } from 'react'
import TaskElement from './TaskElement'

const Tasklist = (props) => {
   
    let i=0,j=0;
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <h2 style={{width:'100px',margin: 'auto'}}>Tasks</h2>
    <div style={{border:'2px solid black',width:'50vw',margin: '2px 2px',height:'500px',overflow:'auto'}}>
           
           {props.Taskslist && props.Taskslist.map((element)=>{
               return <TaskElement key={i++} id={j++} taskss={element} curstate={props.curstate} setbtnVar={props.setbtnVar} seteditID={props.seteditID} editID={props.editID} setTaskslist={props.setTaskslist} Taskslist={props.Taskslist} setcurstate={props.setcurstate} taskscompleted={props.taskscompleted} settaskscompleted={props.settaskscompleted}/>
           })}
    </div>
    </div>
  )
}

export default Tasklist
