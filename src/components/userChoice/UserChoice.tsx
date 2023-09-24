import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TUsers } from "../../types/typesUsersReducer";
import "./UserChoice.scss"

interface UserChoiceProps {
    visibleUserChoice: boolean,
    setVisibleUserChoice: (visibleUserChoice: boolean) => void
}


const UserChoice: React.FC<UserChoiceProps> = ({ visibleUserChoice, setVisibleUserChoice }) => {

    const { users } = useSelector((state: RootState) => state.users) as { users: TUsers[] }


    const assignToUser = () => {
        setVisibleUserChoice(false)
    }


    return (
        <div className="userChoiceContainer">
            {users.map(user =>
                <h4 onClick={() => assignToUser()}>{user.firstName} {user.lastName}</h4>
            )}
        </div>
    )
}

export default UserChoice;