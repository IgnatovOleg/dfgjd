import React, { useState } from "react"
import { TProcesses, TProject, TTask } from "../../types/typesProjectsReducer"
import "./Task.scss"
import Input from "../input/Input"
import { useForm } from "react-hook-form"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch } from "react-redux"
import { editTaskDescAction, removeTaskFromListaction, visibleTitleAction,  } from "../../store/reducers/projectsReducer"

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


    const dispatch = useDispatch()

    const removeDescriptionTask = (data: TTask) => {
        dispatch(editTaskDescAction(project, process, task, data))
        dispatch(visibleTitleAction(project, process, task))
        reset()
    }
    const removeTask = () => {
        dispatch(removeTaskFromListaction(project, process, task))
    }
    const visibleTitle = () => {
        dispatch(visibleTitleAction(project, process, task))
    }

    return (
        <div className="taskContainer">
            {task.visibleTitle
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
                <AiOutlineEdit className="btnStyle"/>
                <RiDeleteBin2Line className="btnStyle" onClick={() => removeTask()}/>
            </div>
        </div>
    )
}

export default Task;