import React from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../store/reducers/projectsReducer";
import { TProcesses, TProject, TTask } from "../../types/typesProjectsReducer";
import Button from "../button/Button";
import "./ProcessWindow.scss";

interface ProcessWindowProps {
    project: TProject,
    process: TProcesses,
}

const ProcessWindow: React.FC<ProcessWindowProps> = ({ project, process }) => {

    const dispatch = useDispatch()

    const addNewTask = () => {
        const newTask: TTask = {
            id: Date.now(),
            title: "kjkhghjk"
        }
        dispatch(addTaskAction(project, newTask))
    }


    return (
        <div className="processWindowContainer">
            <h3>{process.title} tasks</h3>
            <Button buttonName={"Add task"} click={addNewTask} />
            <div className="tasks">
                {process.tasks.map(task => 
                    <h3>{task.title}</h3>
                    )}
            </div>
        </div>
    )
}

export default ProcessWindow;