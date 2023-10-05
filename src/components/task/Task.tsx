import React, { useState } from "react"
import { TProcesses, TProject, TTask } from "../../types/typesProjectsReducer"
import "./Task.scss"
import Input from "../input/Input"
import { useForm } from "react-hook-form"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { BiAddToQueue } from 'react-icons/bi';

import { useDispatch, useSelector } from "react-redux"
import { editTaskDescAction, removeTaskFromListaction, visibleTitleAction, } from "../../store/reducers/projectsReducer"
import { RootState } from "../../store"
import { TUsers } from "../../types/typesUsersReducer"
import { addTaskToCurrentAction, addTaskToPlannedAction } from "../../store/reducers/usersReducer"

interface TaskProps {
    project: TProject,
    process: TProcesses,
    task: TTask,
    currentTasks?: number | null,
    setCurrentTasks: (currentTasks: number | null) => void,
    visibleModalSelection: boolean,
    setVisibleModalSelection: (visibleModal: boolean) => void,
}


const Task: React.FC<TaskProps> = ({ project, process, task, currentTasks, setCurrentTasks, visibleModalSelection, setVisibleModalSelection }) => {



    const { users } = useSelector((state: RootState) => state.users) as { users: TUsers[] }

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
        reset()
    }
    const visibleTitle = () => {
        dispatch(visibleTitleAction(project, process, task))
        reset()
    }

    const visibleTasks = () => {
        if (currentTasks === null || currentTasks === task.id) {
            return { opacity: "1" }
        } else {
            return { opacity: "0" }
        }
    }
    const visibleSelectionList = () => {
        setCurrentTasks(task.id)
        setVisibleModalSelection(true)
    }
    const addTaskToListCurrent = () => {
        dispatch(addTaskToCurrentAction(process.title, task))
        setVisibleModalSelection(false)
        setCurrentTasks(null)
    }
    const addTaskToListPlanned = () => {
        dispatch(addTaskToPlannedAction(process.title, task))
        setVisibleModalSelection(false)
        setCurrentTasks(null)
    }

    return (
        <div style={visibleTasks()} className="taskContainer">
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
                {users.map(user =>
                    <>
                        {user.executorProcess === process.title
                            ? <BiAddToQueue className="btnStyle" onClick={() => visibleSelectionList()} />
                            : <div></div>
                        }
                    </>
                )}

                {task.visibleTitle
                    ? <AiOutlineEdit className="btnStyle" onClick={() => visibleTitle()} />
                    : <MdOutlineKeyboardReturn className="btnStyle" onClick={() => visibleTitle()} />
                }
                <RiDeleteBin2Line className="btnStyle" onClick={() => removeTask()} />
            </div>
            <div className={`modalSelection ${visibleModalSelection ? "" : "modalSelectionNone"} `}>
                <h3 onClick={() => addTaskToListCurrent()}>Add to current tasks list</h3>
                <h3 onClick={() => addTaskToListPlanned()}>Add to planned tasks list</h3>
            </div>
        </div>
    )
}

export default Task;