import React,{useState} from 'react'
import { useSelectedProjectValue } from '../context';
import {IoMdStopwatch} from 'react-icons/io'
import {BsFolder2} from 'react-icons/bs'
import moment from 'moment'
import { TaskDate } from '../components/TaskDate';
import {ProjectData} from '../components/ProjectData'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const AddTasks = ({setShow}) => {
  const [dateBox,setDateBox] = useState(false)
  const [projectDataBox,setProjectDataBox] = useState(false)
  console.log(dateBox)
  const [task, setTask] = useState('');
  // const inValid = task === ''
  const [taskDate, setTaskDate] = useState('');
  const [project, setProject] = useState('');
//   const [showMain, setShowMain] = useState(shouldShowMain);
  const [showProjectOverlay, setShowProjectOverlay] = useState(true);
  const [showTaskDate, setShowTaskDate] = useState(true);
  const { selectedProject } = useSelectedProjectValue();

  const addTask = () => {
    const projectId = project || selectedProject;
    let collatedDate = '';

    if (projectId === 'TODAY') {
      collatedDate = moment().format('DD/MM/YYYY');
    } else if (projectId === 'NEXT_7') {
      collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
    }
    const db = getFirestore()
    const colRef =collection(db,'tasks')
    const data = addDoc(colRef,{
      archived:false,
      projectId,
      task,
      date:collatedDate || taskDate,
      userId:'MYCjwK7okTgzoLONLbP2BOK5qMS2'
    })
    setTask('')
    setProject('')
    setShowProjectOverlay(false)  
    setShow(false)
    return (
      task && projectId && data  
    );
  };
    return (
        <div className='bodyc_addtask'>
            <p>
            <input type='text' placeholder='Enter your task' value={task}
            onChange={(e) => setTask(e.target.value)} />
            <button  type='submit' onClick={()=>addTask()}> Add Task</button>
            </p>
            <span className='bodyc_addtask_icon'>
            <div className='overlay'>
            <IoMdStopwatch className='body_icon' onClick={() =>setDateBox(!dateBox)} />
            <BsFolder2 className='body_folder' onClick={() => setProjectDataBox(!projectDataBox)} />
            {dateBox &&<TaskDate setTaskDate={setTaskDate} showTaskDate={showTaskDate} setShowTaskDate={setShowTaskDate} />}
            {projectDataBox && <ProjectData setProject={setProject} showProjectOverlay={showProjectOverlay} setShowProjectOverlay={setShowProjectOverlay}/>}
            </div>
            </span>
        </div>
    )
}

export default AddTasks
