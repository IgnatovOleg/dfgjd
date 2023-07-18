import React, { useState } from "react"
import { TProcesses, TProject, TTask } from "../../types/typesProjectsReducer"
import "./Task.scss"
import Input from "../input/Input"
import { useForm } from "react-hook-form"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';

interface TaskProps {
    project: TProject,
    process: TProcesses,
    task: TTask,
}


const Task: React.FC<TaskProps> = ({ project, process, task }) => {

    const [titleTask, setTitleTask] = useState(false)

    const removeDescriptionTask = () => {

    }

    return (
        <div className="taskContainer">
            {titleTask
                ? <h3 onClick={() => setTitleTask(false)}>{task.title}</h3>
                : <Input placeholder={"enter a task description"} />
            }
            <div className="btnTask">
                <AiOutlineEdit className="btnStyle" onClick={() => setTitleTask(false)} />
                <RiDeleteBin2Line className="btnStyle" onClick={() => removeDescriptionTask()} />
            </div>
        </div>
    )
}

export default Task;