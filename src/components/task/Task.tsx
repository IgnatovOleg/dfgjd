import React, {useState} from "react"
import { TTask } from "../../types/typesProjectsReducer"
import "./Task.scss"
import Input from "../input/Input"
import { useForm } from "react-hook-form"

interface TaskProps {
    task: TTask,
}


const Task: React.FC <TaskProps> = ({task}) => {

    const [titleTask, setTitleTask] = useState(false)

    return(
        <div className="taskContainer">
            {titleTask
                ? <h3 onClick={() => setTitleTask(false)}>{task.title}</h3>
                : <Input placeholder={"enter a task description"}/>
            }
        </div>
    )
}

export default Task;