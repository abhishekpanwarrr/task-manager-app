import React,{useState,useEffect} from 'react'
import AddTasks from '../bodycomponents/AddTasks'
import {AiOutlinePlus} from 'react-icons/ai'
import { collatedTasks } from '../constants'
import { getCollatedTitle, getTitle, taskExist } from '../helpers'
import { useTasks } from '../hooks'
import { Checkbox } from './Checkbox'
import { useSelectedProjectValue, useProjectsValue } from '../context'

const Body = () => {
  const [show,setShow] = useState(false)
  const { selectedProject } = useSelectedProjectValue();
  console.log(selectedProject)
  const {projects} = useProjectsValue()
  const {tasks} = useTasks(selectedProject)
  console.log(tasks)
  // let projectName = ''

  //   if( selectedProject){
  //       collatedTasks.map( item => {
  //         if(item.key === selectedProject) {
  //           return projectName = item.name
  //         }
  //         const resp = projects.map(item => item.projectId === selectedProject ? item.projectName : null)
  //       projectName = resp
  //       console.log(projectName)
  //       })
  //   }
  

  // useEffect(() => {
  //   document.title = `${projectName}: Todo App`;
  // },[projectName])
    return (
        <div className='body'> 
          <p className='bodyp' onClick={() => setShow(!show)}><AiOutlinePlus /> <span>Add Task</span></p>
            {show ? <AddTasks /> : null}
         
          <ul className='body_first_list' >
          {tasks.map((task) => (
            <li key={task.id} >
              <Checkbox id={task.id} taskDes={task.task} />
              <span>{task.task}</span>
            </li>
          ))}
          </ul>
        </div>
    )
}

export default Body
