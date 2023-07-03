import { addUser, Iusers, TUsers, usersActionsTypes } from "../../types/typesUsersReducer"

const defaultState: Iusers = {
    users: []
}




export const usersReducer = (state = defaultState, action: addUser) => {
    switch (action.type) {
        case usersActionsTypes.ADD_USER:
            return {
                ...state, users: [...state.users, action.payload]
            }
        default:
            return { ...state }
    }
}

export const addUserAction = (payload: TUsers) => ({ type: usersActionsTypes.ADD_USER, payload }) 