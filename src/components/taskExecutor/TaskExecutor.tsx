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
            {user.currentTasks?.map(current =>
                <div>
                    <h3>{current.title} list:</h3>
                    {current.items?.map(item => 
                        <h4>{item.title}</h4>
                    )}
                </div>
            )}
            {user.plannedTasks?.map(planned =>
                <div>
                    <h3>{planned.title} list:</h3>
                    {planned.items?.map(item => 
                        <h4>{item.title}</h4>
                    )}
                </div>
            )}
            {user.complatedTasks?.map(complated =>
                <div>
                    <h3>{complated.title} list:</h3>
                    {complated.items?.map(item => 
                        <h4>{item.title}</h4>
                    )}
                </div>
            )}
        </div>
    )
}

export default TaskExecutor;