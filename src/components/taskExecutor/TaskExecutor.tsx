import React from "react"
import { TTask } from "../../types/typesProjectsReducer"
import { TUsers } from "../../types/typesUsersReducer"
import "./TaskExecutor.scss"

interface TaskExecutorProps {
    user: TUsers
}

const TaskExecutor: React.FC<TaskExecutorProps> = ({ user, }) => {


    return (
        <div className="taskExecutorContainer">
            <div className="executorInfo">
                <img src="" alt="" />
                <h3>{user.firstName} {user.lastName}</h3>
            </div>
            <div className="currentTaskList">
                <h3>Current Task List:</h3>
            </div>
            <div className="plannedTasks">
                <h3>Planned tasks:</h3>
            </div>
            <div className="complatedTasks">
                <h3>Complated Task:</h3>
            </div>
        </div>
    )
}

export default TaskExecutor;