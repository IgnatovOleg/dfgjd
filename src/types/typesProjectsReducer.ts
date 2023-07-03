
export type TProjects = {
    projects: TProject[]
}


export type TProject = {
    id?: number,
    title?: string
}

export enum projectsActionTypes {
    ADD_PROJECTS = "ADD_PROJECTS",
    REMOVE_PROJECTS = "REMOVE_PROJECTS",
    REMOVE_PROJECT_TITLE = "REMOVE_PROJECT_TITLE",
}

export type actionTypes = {
    type: projectsActionTypes.ADD_PROJECTS | projectsActionTypes.REMOVE_PROJECTS | projectsActionTypes.REMOVE_PROJECT_TITLE,
    payload: TProject
}