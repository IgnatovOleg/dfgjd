import react from "react"
import "./TaskExecutor.scss"


const TaskExecutor = () => {



    return (
        <div className="taskExecutorContainer">
            <div className="executorInfo">
                <img src="" alt="" />
                <h3>Executor Name</h3>
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