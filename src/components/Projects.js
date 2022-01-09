import React,{useState,useEffect} from 'react'
// import Firebase from '../firebase'
import { getFirestore,collection,where,query,onSnapshot,orderBy } from "firebase/firestore" 
import { useSelectedProjectValue } from '../context'

const Projects = () => {
    const [data, setData] = useState([])
    const { setSelectedProject } = useSelectedProjectValue()
    useEffect(() => {

        const db =getFirestore()
        const colRef = collection(db, 'projects')
         query(colRef,where('userId','==','MYCjwK7okTgzoLONLbP2BOK5qMS2'),orderBy('projectId'))
        
        onSnapshot(colRef, (snapshot) => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(),
                docId:project.id, 
            }))
            setData(allProjects)
        })
    },[])

    return (
        <ul className='projects'>
            {data.map((doc) => (
                <li key={doc.projectId} role='button' onClick={() => {
                    setSelectedProject(doc.projectId)
                  }}>{doc.projectName}</li>
            ))}
        </ul>
    )
}

export default Projects
