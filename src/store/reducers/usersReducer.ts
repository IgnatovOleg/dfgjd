import { addUser, Iusers, TUsers, usersActionsTypes } from "../../types/typesUsersReducer"

const defaultState: Iusers = {
    users: [
        {id: 1, login: "ignatovoleg", password: "ignatovOleg!", confirmPassword: "ignatovOleg!", firstName: "Oleg", lastName: "Ignatov", middleName: "Volodomorovich", email: "08623.ignatovoleg@gmail.com", phone: "380934352419"},
        {id: 2, login: "savchenkoserhiy", password: "savchenkoSerhiy!", confirmPassword: "savchenkoSerhiy!", firstName: "Serhiy", lastName: "Savchenko", middleName: "Anatolievich", email: "08623.ignatovoleg@gmail.com", phone: "38095432830"},
        {id: 3, login: "ignatovaVika", password: "цй", confirmPassword: "ignatovaVika!", firstName: "Vika", lastName: "Ignatova", middleName: "Olexandrovna", email: "08623.ignatovoleg@gmail.com", phone: "380934352419"},
    ]
}




export const usersReducer = (state = defaultState, action: addUser) => {
    switch (action.type) {
        case usersActionsTypes.ADD_USER:
            return {
                ...state, users: [...state.users, action.payload]
            }
        default:
            return { ...state, users: [...state.users] }
    }
}

export const addUserAction = (payload: TUsers) => ({ type: usersActionsTypes.ADD_USER, payload }) 