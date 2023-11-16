import {  useState } from 'react';
import './App.css';
import Addtask from './components/Addtask';
import Tasklist from './components/Tasklist';
import Completedtask from './components/Completedtask';

function App() {
  const [Taskslist,setTaskslist]=useState([]);
  const [btnVar,setbtnVar]=useState('Add');
  const [taskscompleted, settaskscompleted] = useState([]);
  const [curstate,setcurstate]=useState({taskname:"",description:""});
  const [editID,seteditID]=useState();
  return (
    <>

      <div>
        <Addtask   Taskslist={Taskslist} setTaskslist={setTaskslist} btnVar={btnVar} curstate={curstate} setcurstate={setcurstate} setbtnVar={setbtnVar} editID={editID}/>
      </div>
      <div style={{ display: 'flex', border: '2px solid black', height: '510px' }} className='my-2'>
        <Tasklist  Taskslist={Taskslist} setbtnVar={setbtnVar} curstate={curstate} setcurstate={setcurstate} seteditID={seteditID} setTaskslist={setTaskslist} settaskscompleted={settaskscompleted} taskscompleted={taskscompleted}/>
        <Completedtask taskscompleted={taskscompleted} />
      </div>
    </>
  );
}

export default App;
