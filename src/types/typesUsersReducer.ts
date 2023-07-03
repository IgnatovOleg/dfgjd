

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
}


// --------------------------------------------------------------------

export enum usersActionsTypes {
    ADD_USER = "ADD_USER"
}

export interface addUser {
    type: usersActionsTypes.ADD_USER,
    payload: Partial<TUsers> 
}