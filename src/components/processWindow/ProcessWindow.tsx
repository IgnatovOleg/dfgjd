import React from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../store/reducers/projectsReducer";
import { TProject, TTask } from "../../types/typesProjectsReducer";
import Button from "../button/Button";
import "./ProcessWindow.scss";

interface ProcessWindowProps {
    project: TProject
}

const ProcessWindow:React.FC <ProcessWindowProps> = ({project}) => {

    const dispatch = useDispatch()

    const addNewTask = () => {
        const newTask: TTask = {
            id: Date.now(),
            title: "kjkhghjk"
        }
        dispatch(addTaskAction(project, newTask))
    }


    return(
        <div className="processWindowContainer">
            <h3>Process jobs</h3>
            <Button buttonName={"Add task"} click={addNewTask}/>
            <div className="tasks">
                {project.processes.map(process => (
                    process.tasks.map(task => (
                        <div className="taskContainer">
                            {task.title}
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default ProcessWindow;