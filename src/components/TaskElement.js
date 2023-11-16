import React from 'react'

const TaskElement = (props) => {
  const handleDelete=()=>{
        props.settaskscompleted([...(props.taskscompleted),{taskname:props.Taskslist[props.id].taskname,description:props.Taskslist[props.id].description}]);
        console.log(props.taskscompleted);
        let newlist=props.Taskslist.filter((ele,idx)=>{
                   return idx!==props.id
        });
        props.setTaskslist(newlist);
        
  }
  const handleEdit=()=>{
        props.setcurstate(props.Taskslist[props.id]);
        props.setbtnVar('Edit');
        props.seteditID(props.id);
  }
  
  return (
    <div className='mx-3 my-1' style={{display:'inline-block',width:'45vw'}}>
      
        <li className='' style={{float:'left',width:'30vw',overflow:'auto'}}>{`${props.taskss.taskname} : ${props.taskss.description}`}</li>
         <button className='btn btn-primary mx-1 ' style={{float:'right'}} onClick={handleEdit}>Edit</button>
         <button className='btn btn-primary ' style={{float:'right'}} onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TaskElement
