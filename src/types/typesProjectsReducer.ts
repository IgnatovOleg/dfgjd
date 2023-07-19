import { DataForm } from "../components/projectWindow/ProjectWindow";


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
    title: string,
    
}

export enum projectsActionTypes {
    ADD_PROJECTS = "ADD_PROJECTS",
    REMOVE_PROJECTS = "REMOVE_PROJECTS",
    REMOVE_PROJECT_TITLE = "REMOVE_PROJECT_TITLE",

    ADD_PROCESS = "ADD_PROCESS",
    DELETE_PROCESSES = "DELETE_PROCESSES",
    REMOVE_PROCESS_TITLE = "REMOVE_PROCESS_TITLE",
    ACTIVE_PROCESS = "ACTIVE_PROCESS",

    ADD_TASK = "ADD_TASK",
    EDIT_DESCRIPTION_TASK = "EDIT_DESCRIPTION_TASK",
    REMOVE_TASK_LIST = "REMOVE_TASK_LIST"
}
// ---------Project--------
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

// --------Process---------
export type addProcess = {
    type: projectsActionTypes.ADD_PROCESS,
    payload: {
        obj: TProject,
        newProcess: TProcesses
    }
}
export type deleteProcesses= {
    type: projectsActionTypes.DELETE_PROCESSES,
    payload: {
        proj: TProject,
        proc: TProcesses
    }
}
export type removeProcessTitle = {
    type: projectsActionTypes.REMOVE_PROCESS_TITLE,
    payload: {
        pr: TProject,
        process: TProcesses,
        newTitle: DataForm
    }
}
export type activeProcess = {
    type: projectsActionTypes.ACTIVE_PROCESS,
    payload: {
        object: TProject,
        proce: TProcesses
    }
}


// ------------Task-------------
export type addTask = {
    type: projectsActionTypes.ADD_TASK,
    payload: {
        projectForAddNewTask: TProject,
        processForAddNewTask: TProcesses,
        newTask: TTask,
    }
}
export type editDescriptionTask = {
    type: projectsActionTypes.EDIT_DESCRIPTION_TASK,
    payload: {
        projectForNewTaskDesc: TProject,
        processForNewTaskDesc: TProcesses,
        taskWithNewDesc:TTask,
        dataForNewTaskDesc: TTask
    }
}
export type removeTask = {
    type: projectsActionTypes.REMOVE_TASK_LIST,
    payload: {
        projectForDeLTask: TProject,
        processForDelTask: TProcesses,
        taskForDelTask: TTask
    }

}

export type actionTypes = addProject | removeProjects | removeProjectTitle | addProcess | deleteProcesses | removeProcessTitle | activeProcess | addTask | editDescriptionTask | removeTask
