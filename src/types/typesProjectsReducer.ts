
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

export type actionTypes = {
    type: projectsActionTypes.ADD_PROJECTS | projectsActionTypes.REMOVE_PROJECTS | projectsActionTypes.REMOVE_PROJECT_TITLE | projectsActionTypes.ADD_PROCESS | projectsActionTypes.REMOVE_PROCESS_TITLE | projectsActionTypes.DELETE_PROCESSES | projectsActionTypes.ADD_TASK,
    payload: TProject | any
}