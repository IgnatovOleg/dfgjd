import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { assignProcessAction } from "../../store/reducers/usersReducer";
import { TProject } from "../../types/typesProjectsReducer";
import { TUsers } from "../../types/typesUsersReducer";
import "./UserChoice.scss"

interface UserChoiceProps {
    visibleUserChoice: boolean,
    setVisibleUserChoice: (visibleUserChoice: boolean) => void,
}


const UserChoice: React.FC<UserChoiceProps> = ({ visibleUserChoice, setVisibleUserChoice }) => {

    const { users } = useSelector((state: RootState) => state.users) as { users: TUsers[] }
    const { projects } = useSelector((state: RootState) => state.projects) as { projects: TProject[] }


    const dispatch = useDispatch()

    const assignToUser = (user: TUsers) => {

        for (let a of projects) {
            for (let b of a.processes) {
                if (b.is_active) {
                    dispatch(assignProcessAction(b.title, user))
                    console.log(user, "user");
                    
                }
            }
        }
        setVisibleUserChoice(false)
    }



    return (
        <div className="userChoiceContainer">
            {users.map(user =>
                <h4 onClick={() => assignToUser(user)}>{user.firstName} {user.lastName}</h4>
            )}
        </div>
    )
}

export default UserChoice;