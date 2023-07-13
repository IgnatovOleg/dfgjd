import { DataForm } from "../components/projectWindow/ProjectWindow"

export type TProjects = {
    projects: TProject[]
}
export type TProject = {
    id: number,
    title: string,
    processes: TProcesses[],
}
export type TProcesses = {
    id: number,
    title: string,
    tasks: TTask[],
    is_active: boolean
}
export type TTask = {
    id: number,
    title: string
}

export enum projectsActionTypes {
    ADD_PROJECTS = "ADD_PROJECTS",
    REMOVE_PROJECTS = "REMOVE_PROJECTS",
    REMOVE_PROJECT_TITLE = "REMOVE_PROJECT_TITLE",

    ADD_PROCESS = "ADD_PROCESS",
    DELETE_PROCESSES = "DELETE_PROCESSES",
    REMOVE_PROCESS_TITLE = "REMOVE_PROCESS_TITLE",

    ADD_TASK = "ADD_TASK",
}

// export type actionTypes = {
//     type: projectsActionTypes.ADD_PROJECTS | projectsActionTypes.REMOVE_PROJECTS | projectsActionTypes.REMOVE_PROJECT_TITLE | projectsActionTypes.ADD_PROCESS | projectsActionTypes.REMOVE_PROCESS_TITLE | projectsActionTypes.DELETE_PROCESSES | projectsActionTypes.ADD_TASK,
//     payload: TProject | any
// }

export type addProject = {
    type: projectsActionTypes.ADD_PROJECTS,
    payload: TProject
}
export type removeProjects = {
    type: projectsActionTypes.REMOVE_PROJECTS,
    payload: TProject
}
export type removeProjectTitle = {
    type: projectsActionTypes.REMOVE_PROJECT_TITLE,
    payload: {
        project: TProject,
        data: DataForm
    }
}

export type addProcess = {
    type: projectsActionTypes.ADD_PROCESS,
    payload: {
        obj: TProject,
        newProcess: TProcesses
    }
}


export type addTask = {
    type: projectsActionTypes.ADD_TASK,
    payload: {
        pt: TProject,
        newTask: TTask,
    }
}

export type actionTypes = addProject | removeProjects | removeProjectTitle | addProcess | addTask
