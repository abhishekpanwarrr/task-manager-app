import { collatedTasks } from "../constants"


export const taskExist = selectedProject => {
    collatedTasks.find(task => task.key === selectedProject )
}
export const getCollatedTitle = (projects,key) => {
    projects.find(project => project.key === key)
}
export const getTitle = (projects,projectId) => {
     projects.find(project => project.projectId === projectId)
    
}