import { type } from "os"


export interface Iusers {
    users: TUsers[]
}

export type TUsers = {
    id?: number,
    login?: string,
    password?: string,
    confirmPassword?: string,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    email?: string,
    phone?: string,
    authorization?: boolean
}


// --------------------------------------------------------------------

export enum usersActionsTypes {
    ADD_USER = "ADD_USER",
    AUTHORIZATION_USER = "AUTHORIZATION_USER",
    EXIT_USER = "EXIT_USER"
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

export type actionTypesUsers = addUser | authorizationUser | exitUser