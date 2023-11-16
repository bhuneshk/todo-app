import React from 'react'

const TaskElementComp = (props) => {
  return (
    <div className='mx-3 my-1' style={{display:'inline-block',width:'45vw'}}>
      
        <li className='' style={{float:'left',width:'30vw',overflow:'auto'}}>{`${props.taskss.taskname} : ${props.taskss.description}`}</li>
        
    </div>
  )
}

export default TaskElementComp
