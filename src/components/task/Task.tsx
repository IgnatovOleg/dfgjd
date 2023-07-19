import React, { useState } from "react"
import { TProcesses, TProject, TTask } from "../../types/typesProjectsReducer"
import "./Task.scss"
import Input from "../input/Input"
import { useForm } from "react-hook-form"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch } from "react-redux"
import { removeTaskDescAction } from "../../store/reducers/projectsReducer"

interface TaskProps {
    project: TProject,
    process: TProcesses,
    task: TTask,
}


const Task: React.FC<TaskProps> = ({ project, process, task }) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<TTask>({
        mode: "onChange"
    })

    const [titleTask, setTitleTask] = useState(false)

    const dispatch = useDispatch()

    const removeDescriptionTask = (data: TTask) => {
        dispatch(removeTaskDescAction(project, process, task, data))
        setTitleTask(true)
        reset()
    }

    return (
        <div className="taskContainer">
            {titleTask
                ? <h3>{task.title}</h3>
                : <form onSubmit={handleSubmit(removeDescriptionTask)}>
                    <Input
                        register={register("title", {
                            required: "Enter description",
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "Pleace enter valid login",
                            },
                            minLength: 5
                        })}
                        placeholder={"enter a task description"} />
                </form>
            }
            <div className="btnTask">
                <AiOutlineEdit className="btnStyle" onClick={() => setTitleTask(false)}/>
                <RiDeleteBin2Line className="btnStyle" />
            </div>
        </div>
    )
}

export default Task;