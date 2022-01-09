import { collection, getFirestore, onSnapshot,query,where,orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"
import { taskExist } from "../helpers"
import moment from 'moment'

export const useTasks = selectedProject =>{
    const [tasks,setTasks] = useState([])
    const [archivedTasks,setArchivedTasks] = useState([])
console.log('ddd',selectedProject);
    useEffect(() => {
        const db= getFirestore()
        const colRef = collection(db,'tasks')
        let unsubscribe = query(colRef,where('userId','==','MYCjwK7okTgzoLONLbP2BOK5qMS2'))

        unsubscribe = selectedProject && taskExist(selectedProject) 
        ? (unsubscribe = query(colRef,where('projectId','==',selectedProject)))
        : selectedProject === 'TODAY'
        ? (unsubscribe = query(colRef,where('date','==',moment().format('DD/MM/YYYY'))))
        : selectedProject === 'INBOX' || selectedProject === 0 
        ? (unsubscribe = query(colRef,where('date','==','')))
        : unsubscribe

        unsubscribe = onSnapshot(colRef,(snapshot) => {
            const newTasks = snapshot.docs.map(task => ({
                id:task.id,
                ...task.data(),
            }))
            setTasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                task => moment(task.date, 'DD-MM-YYYY').diff(moment(),'days') <=7 && 
                task.archived !== true
                ): newTasks.filter(task => task.archived !== true)
            )
            setArchivedTasks(newTasks.filter(task => task.archived !== false))
        })
        return () => unsubscribe()
    },[selectedProject])
    return {tasks,archivedTasks}
}

export const useProjects = () => {
    const [projects,setProjects] = useState([])

    useEffect(() => {
        const db =getFirestore()
        const colRef = collection(db, 'projects')
         query(colRef,where('userId','==','MYCjwK7okTgzoLONLbP2BOK5qMS2'),orderBy('projectId'))
        
        onSnapshot(colRef, (snapshot) => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId:project.id, 
            }))
            if(JSON.stringify(allProjects) !== JSON.stringify(projects)){
                setProjects(allProjects)
            }
        })
    },[projects])
    return {projects,setProjects}
}