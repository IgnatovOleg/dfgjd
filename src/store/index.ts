import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { projectsReducer } from "./reducers/projectsReducer";
import { usersReducer } from "./reducers/usersReducer";



const rootReducers = combineReducers({
    users: usersReducer,
    projects: projectsReducer
})

export const store = createStore(rootReducers)
export type RootState = ReturnType<typeof rootReducers>;