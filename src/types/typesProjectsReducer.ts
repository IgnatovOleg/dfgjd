import { DataForm } from "../components/projectWindow/ProjectWindow"

export type TProjects = {
    projects: TProject[]
}

export type TProcesses = {
    id?: number,
    title?: string
}


export type TProject = {
    id: number,
    title: string,
    processes: TProcesses[],
}

export type s = {
    project: TProject,
    data: DataForm
}

export enum projectsActionTypes {
    ADD_PROJECTS = "ADD_PROJECTS",
    REMOVE_PROJECTS = "REMOVE_PROJECTS",
    REMOVE_PROJECT_TITLE = "REMOVE_PROJECT_TITLE",
    DEL_ROJECT_TITLE = "DEL_ROJECT_TITLE",
    ADD_PROCESS = "ADD_PROCESS",
    REMOVE_PROCESS_TITLE = "REMOVE_PROCESS_TITLE"
}

export type actionTypes = {
    type: projectsActionTypes.ADD_PROJECTS | projectsActionTypes.REMOVE_PROJECTS | projectsActionTypes.REMOVE_PROJECT_TITLE | projectsActionTypes.DEL_ROJECT_TITLE | projectsActionTypes.ADD_PROCESS | projectsActionTypes.REMOVE_PROCESS_TITLE,
    payload: TProject | any
}