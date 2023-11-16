import React from 'react'

const Addtask = (props) => {
    const {setTaskslist,Taskslist,btnVar,curstate,setcurstate,editID,setbtnVar} = props;
    const handleSubmit=(e)=>{
        if(btnVar==='Add'){
        e.preventDefault();
        setTaskslist([...Taskslist,{taskname: curstate.taskname,description:curstate.description}]);
        setcurstate({taskname:"",description:""})}
        else{
        e.preventDefault();
        setbtnVar("Add");
        let tlist=Taskslist;
        tlist[editID]=curstate;
        setTaskslist(tlist);
        setcurstate({taskname:"",description:""})
           }
        }
    

    const handleChange=(e)=>{
        
        setcurstate({...curstate,[e.target.name]: e.target.value});
    }
    return (
        <div style={{border:"2px solid black",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <form className='my-3' onSubmit={handleSubmit}>
                <label htmlFor="taskname" className='mx-2' >Task Name :</label>
                <input type="text" id='taskname' name='taskname' onChange={handleChange} value={curstate.taskname}/>
                <label htmlFor="description" className='mx-2' >Description :</label>
                <input type="text" id='description' size="100" name='description' onChange={handleChange} value={curstate.description}/>
                <button type="submit" className='btn btn-primary mx-2'>{`${btnVar} Task`}</button>
            </form>
        </div>
    )
}

export default Addtask
