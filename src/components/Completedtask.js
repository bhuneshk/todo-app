import React from 'react'
import TaskElementComp from './TaskElementComp'

const Completedtask = (props) => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <h2 style={{width:'100px',margin: 'auto'}}>Completed&nbsp;Task</h2>
    <div style={{border:'2px solid black',width:'50vw',margin: '2px 2px',height:'500px',overflow:'auto'}}>
           {props.taskscompleted && props.taskscompleted.map((element)=>{
            console.log("Running this element")
                 return <TaskElementComp taskss={element}/>
           })}
    </div>
    </div>
  )
}

export default Completedtask
