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
            <div>
                <h4>Current task list:</h4>
                {user.currentTasks?.map(current =>
                    <h3>{current.title}</h3>
                )}
            </div>
            <div>
                <h4>Planned task list:</h4>
                {user.plannedTasks?.map(planned =>
                    <h3>{planned.title}</h3>
                )}
            </div>
            <div>
                <h4>Planned task list:</h4>
                {user.complatedTasks?.map(complated =>
                    <h3>{complated.title}</h3>
                )}
            </div>
        </div>
    )
}

export default TaskExecutor;