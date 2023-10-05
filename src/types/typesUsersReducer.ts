import { TProcesses, TTask } from "./typesProjectsReducer"

export interface Iusers {
    users: TUsers[]
}

export type TUsers = {
    id?: number,
    login?: string,
    password: string,
    confirmPassword: string,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    email?: string,
    phone?: string,
    authorization?: boolean,
    executorProcess?: string,
    currentTasks?: TTask[],
    plannedTasks?: TTask[],
    complatedTasks?: TTask[],
}


// --------------------------------------------------------------------

export enum usersActionsTypes {
    ADD_USER = "ADD_USER",
    AUTHORIZATION_USER = "AUTHORIZATION_USER",
    EXIT_USER = "EXIT_USER",
    EDIT_USER_INFO = "EDIT_USER_INFO",

    ASSIGN_PROCESS = "ASSIGN_PROCESS",
    ADD_TASK_TO_CURRENT = "ADD_TASK_TO_CURRENT",
    ADD_TASK_TO_PLANNED = "ADD_TASK_TO_PLANNED",
}

export type addUser = {
    type: usersActionsTypes.ADD_USER,
    payload: Partial<TUsers>
}

export type authorizationUser = {
    type: usersActionsTypes.AUTHORIZATION_USER,
    payload: TUsers
}

export type exitUser = {
    type: usersActionsTypes.EXIT_USER,
    payload: TUsers
}
export type exitUserInfo = {
    type: usersActionsTypes.EDIT_USER_INFO,
    payload: {
        data: TUsers,
        user: TUsers
    }
}

export type asignProcess = {
    type: usersActionsTypes.ASSIGN_PROCESS,
    payload: {
        processTitle: string,
        userForAssignProcess: TUsers
    }
}
export type addTaskToCurrent = {
    type: usersActionsTypes.ADD_TASK_TO_CURRENT,
    payload: {
        processForAddToCurrent: string,
        taskForAddToCurrent: TTask
    }
}
export type addTaskToPlanned = {
    type: usersActionsTypes.ADD_TASK_TO_PLANNED,
    payload: {
        processForAddToPlanned: string,
        taskForAddToPlanned: TTask
    }
}

export type actionTypesUsers = addUser | authorizationUser | exitUser | exitUserInfo | asignProcess | addTaskToCurrent | addTaskToPlanned