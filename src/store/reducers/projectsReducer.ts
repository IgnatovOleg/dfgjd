import { DataForm } from "../../components/projectWindow/ProjectWindow"
import { actionTypes, projectsActionTypes, TProcesses, TProject, TProjects, TTask } from "../../types/typesProjectsReducer"


const defaultState: TProjects = {
    projects: [
        { id: 1, title: "Mock1", processes: [{ id: 2, title: "mock1.2", tasks: [{ id: 3, title: "mock1.3", visibleTitle: false }], is_active: false }] },
        { id: 2, title: "Mock2", processes: [{ id: 2, title: "mock2.2", tasks: [{ id: 3, title: "mock2.3", visibleTitle: false }], is_active: false }] }
    ]
}


export const projectsReducer = (state = defaultState, action: actionTypes) => {
    switch (action.type) {
        case projectsActionTypes.ADD_PROJECTS:
            return { ...state, projects: [...state.projects, action.payload] }
        case projectsActionTypes.REMOVE_PROJECTS:
            return { ...state, projects: state.projects.filter(project => project.id !== action.payload.id) }
        case projectsActionTypes.REMOVE_PROJECT_TITLE:
            const { project, data } = action.payload
            const updatedProjects = state.projects.map((p) => p.id === project.id ? { ...p, title: data.title } : p);
            return { ...state, projects: updatedProjects }

        case projectsActionTypes.ADD_PROCESS:
            const { obj, newProcess } = action.payload
            const currentIndexProject = state.projects.findIndex(p => p.id === obj.id)
            const newArrayProject = [...state.projects]
            newArrayProject[currentIndexProject].processes.push(newProcess)
            return { ...state, processes: newArrayProject }
        case projectsActionTypes.DELETE_PROCESSES:
            const { proj, proc } = action.payload
            const currentIndex = state.projects.findIndex(p => p.id === proj.id)
            const arrProj = [...state.projects]
            arrProj[currentIndex].processes = arrProj[currentIndex].processes.filter(p => p.id !== proc.id);
            return { ...state, projects: arrProj }
        case projectsActionTypes.REMOVE_PROCESS_TITLE:
            const { pr, process, newTitle } = action.payload;
            const currentProject = state.projects.findIndex(p => p.id === pr.id)
            const newArray = [...state.projects]
            newArray[currentProject].processes = newArray[currentProject].processes.map(p => p.id === process.id ? { ...p, title: newTitle.title } : p);
            return { ...state, process: newArray }
        case projectsActionTypes.ACTIVE_PROCESS:
            const { object, proce } = action.payload
            const indexProject = state.projects.findIndex(p => p.id === object.id)
            const newProjects = [...state.projects]
            newProjects[indexProject].processes = newProjects[indexProject].processes.map(p => p.id === proce.id ? { ...p, is_active: !p.is_active } : { ...p, is_active: false })
            return { ...state, projects: newProjects }
        case projectsActionTypes.NO_PROCESSES_ACTIVE:
            const currentProjectForNoProcessesActive = state.projects.findIndex(p => p.id === action.payload.id)
            const newArrayWithNotActiveProcesses = [...state.projects]
            newArrayWithNotActiveProcesses[currentProjectForNoProcessesActive].processes.map(p => p.is_active = false)
            return { ...state, projects: newArrayWithNotActiveProcesses }

        case projectsActionTypes.ADD_TASK:
            const { projectForAddNewTask, processForAddNewTask, newTask } = action.payload
            const currentProjectForAddNewTask = state.projects.findIndex(p => p.id === projectForAddNewTask.id)
            const arrayProjects = [...state.projects]
            const currentProcessForAddNewTask = arrayProjects[currentProjectForAddNewTask].processes.findIndex(p => p.id === processForAddNewTask.id)
            arrayProjects[currentProjectForAddNewTask].processes[currentProcessForAddNewTask].tasks.push(newTask)
            return { ...state, projects: arrayProjects }
        case projectsActionTypes.EDIT_DESCRIPTION_TASK:
            const { projectForNewTaskDesc, processForNewTaskDesc, taskWithNewDesc, dataForNewTaskDesc } = action.payload
            const currentProjectForNewDescTask = state.projects.findIndex(p => p.id === projectForNewTaskDesc.id)
            const arrayWithNewDescTask = [...state.projects]
            const currentProcessForNewDescTask = arrayWithNewDescTask[currentProjectForNewDescTask].processes.findIndex(p => p.id === processForNewTaskDesc.id)
            arrayWithNewDescTask[currentProjectForNewDescTask].processes[currentProcessForNewDescTask].tasks.map(t => t.id === taskWithNewDesc.id ? { ...t, title: t.title = dataForNewTaskDesc.title } : t)
            return { ...state, projects: arrayWithNewDescTask }
        case projectsActionTypes.VISIBLE_TITLE:
            const { projectForVisibleTitle, processForVisibleTitle, taskForVisibleTitle } = action.payload
            const currentProjectForVisibleTitle = state.projects.findIndex(p => p.id === projectForVisibleTitle.id)
            const arrayWithVisibleTitle = [...state.projects]
            const currentProcessForVisibleTitle = arrayWithVisibleTitle[currentProjectForVisibleTitle].processes.findIndex(p => p.id === processForVisibleTitle.id)
            arrayWithVisibleTitle[currentProjectForVisibleTitle].processes[currentProcessForVisibleTitle].tasks = arrayWithVisibleTitle[currentProjectForVisibleTitle].processes[currentProcessForVisibleTitle].tasks.map(t => t.id === taskForVisibleTitle.id ? { ...t, visibleTitle: !t.visibleTitle } : t)
            return { ...state, projects: arrayWithVisibleTitle }
        case projectsActionTypes.REMOVE_TASK_LIST:
            const { projectForDeLTask, processForDelTask, taskForDelTask } = action.payload
            const currentProjectForDeLTask = state.projects.findIndex(p => p.id === projectForDeLTask.id)
            const arrayWithNewTaskList = [...state.projects]
            const currentProcessForDeLTask = arrayWithNewTaskList[currentProjectForDeLTask].processes.findIndex(p => p.id === processForDelTask.id)
            const updatedTasks = arrayWithNewTaskList[currentProjectForDeLTask].processes[currentProcessForDeLTask].tasks.filter(t => t.id !== taskForDelTask.id)
            arrayWithNewTaskList[currentProjectForDeLTask].processes[currentProcessForDeLTask].tasks = updatedTasks
            return { ...state, projects: arrayWithNewTaskList }
        default:
            return { ...state }
    }
}

export const addProjectsAction = (payload: TProject) => ({ type: projectsActionTypes.ADD_PROJECTS, payload })
export const removeProjectsAction = (payload: TProject) => ({ type: projectsActionTypes.REMOVE_PROJECTS, payload })
export const removeProjectTitleAction = (project: TProject, data: DataForm) => ({ type: projectsActionTypes.REMOVE_PROJECT_TITLE, payload: { project, data } })

export const addNewProcessAction = (obj: TProject, newProcess: TProcesses) => ({ type: projectsActionTypes.ADD_PROCESS, payload: { obj, newProcess } })
export const removeProcessListAction = (proj: TProject, proc: TProcesses) => ({ type: projectsActionTypes.DELETE_PROCESSES, payload: { proj, proc } })
export const removeProcessTitleAction = (pr: TProject, process: TProcesses, newTitle: DataForm) => ({ type: projectsActionTypes.REMOVE_PROCESS_TITLE, payload: { pr, process, newTitle } })
export const activeProcessAction = (object: TProject, proce: TProcesses) => ({ type: projectsActionTypes.ACTIVE_PROCESS, payload: { object, proce } })
export const noProcessesActiveAction = (payload: TProject) => ({ type: projectsActionTypes.NO_PROCESSES_ACTIVE, payload })

export const addTaskAction = (projectForAddNewTask: TProject, processForAddNewTask: TProcesses, newTask: TTask) => ({ type: projectsActionTypes.ADD_TASK, payload: { projectForAddNewTask, processForAddNewTask, newTask } })
export const editTaskDescAction = (projectForNewTaskDesc: TProject, processForNewTaskDesc: TProcesses, taskWithNewDesc: TTask, dataForNewTaskDesc: TTask) => ({ type: projectsActionTypes.EDIT_DESCRIPTION_TASK, payload: { projectForNewTaskDesc, processForNewTaskDesc, taskWithNewDesc, dataForNewTaskDesc } })
export const removeTaskFromListaction = (projectForDeLTask: TProject, processForDelTask: TProcesses, taskForDelTask: TTask) => ({ type: projectsActionTypes.REMOVE_TASK_LIST, payload: { projectForDeLTask, processForDelTask, taskForDelTask } })
export const visibleTitleAction = (projectForVisibleTitle: TProject, processForVisibleTitle: TProcesses, taskForVisibleTitle: TTask) => ({ type: projectsActionTypes.VISIBLE_TITLE, payload: { projectForVisibleTitle, processForVisibleTitle, taskForVisibleTitle } })
