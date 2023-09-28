import { TTask } from "./typesProjectsReducer"

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
    currentTasks?: TExecutorTasks[],
    plannedTasks?: TExecutorTasks[],
    complatedTasks?: TExecutorTasks[],
}
export type TExecutorTasks = {
        title?: string,
        items?: TTask[]
}


// --------------------------------------------------------------------

export enum usersActionsTypes {
    ADD_USER = "ADD_USER",
    AUTHORIZATION_USER = "AUTHORIZATION_USER",
    EXIT_USER = "EXIT_USER",

    EDIT_USER_INFO = "EDIT_USER_INFO",

    ASSIGN_PROCESS = "ASSIGN_PROCESS",
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

export type actionTypesUsers = addUser | authorizationUser | exitUser | exitUserInfo | asignProcess