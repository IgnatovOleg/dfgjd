import {
    actionTypes,
    projectsActionTypes,
    TProject,
    TProjects
} from "../../types/typesProjectsReducer"


const defaultState: TProjects = {
    projects: []
}


export const projectsReducer = (state = defaultState, action: actionTypes) => {
    switch (action.type) {
        case projectsActionTypes.ADD_PROJECTS:
            return { ...state, projects: [...state.projects, action.payload] }
        case projectsActionTypes.REMOVE_PROJECTS:
            return { ...state, projects: state.projects.filter(project => project.id !== action.payload.id) }
        case projectsActionTypes.REMOVE_PROJECT_TITLE:
            return { ...state, }
        default:
            return { ...state }
    }
}

export const addProjectsAction = (payload: TProject) => ({ type: projectsActionTypes.ADD_PROJECTS, payload })
export const removeProjectsAction = (payload: TProject) => ({ type: projectsActionTypes.REMOVE_PROJECTS, payload })
export const removeProjectTitleAction = (payload: TProject) => ({ type: projectsActionTypes.REMOVE_PROJECT_TITLE, payload })