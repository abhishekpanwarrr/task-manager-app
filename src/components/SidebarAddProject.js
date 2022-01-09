import React,{useState} from 'react'
// import Firebase from '../firebase'
import {addDoc,getFirestore,collection} from "firebase/firestore" 
import {v4} from 'uuid'
const SidebarAddProject = () => {
    const [projectName,setProjectName] = useState('')
    const inValid = projectName === ''
    
    const addProject = () => {
        const db =getFirestore()
        const colRef = collection(db, 'projects')
        addDoc(colRef,{
            projectId:v4(),
            projectName,
            userId:'MYCjwK7okTgzoLONLbP2BOK5qMS2'
        })
        setProjectName('')
    }
    return (
        <div className='sidebar_add_project'>
            <input type='text' placeholder='Add Project ...' onChange={e => setProjectName(e.target.value)} value={projectName} />
            <button disabled={inValid} type='submit' className='sidebar_add_project_button' onClick={() => addProject()}>Add Project</button>
        </div>
    )
}

export default SidebarAddProject
