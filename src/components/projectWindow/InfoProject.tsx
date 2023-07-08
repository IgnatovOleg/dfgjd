import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiWindow, BiWindows } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addNewProcessAction, removeProjectsAction, removeProjectTitleAction } from "../../store/reducers/projectsReducer";
import { TProject } from "../../types/typesProjectsReducer";
import Button from "../button/Button";
import Input from "../input/Input";
import Process from "../process/Process";
import { DataForm } from "./ProjectWindow";
import "./ProjectWindow.scss";

interface InfoProjectProps {
    project: TProject,
    sizeWindow: boolean,
    setSizeWindow: (sizeWindow: boolean) => void
}

const InfoProject:React.FC <InfoProjectProps> = ({project, sizeWindow, setSizeWindow}) => {

    const [titleProject, setTitleProject] = useState<boolean>(true)


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<DataForm>({
        mode: "onChange"
    })

    const dispatch = useDispatch()

    const renameProject = (data: DataForm) => {
        dispatch(removeProjectTitleAction(project, data))
        setTitleProject(true)
        reset()
    }
    const addNewProcess = () => {
        const newProcess = {
            id: Date.now(),
            title: ""
        }
        dispatch(addNewProcessAction(project, newProcess))
    }


    return (
        <>
            <div className="topWindow">
                {titleProject
                    ? <h1 onClick={() => setTitleProject(false)}>{project.title}</h1>
                    : <div className="formNewTitle">
                        <form onSubmit={handleSubmit(renameProject)}>
                        <Input
                            register={register("title", {
                                required: "Your project name?",
                                pattern: {
                                    value: /^[a-zA-Z0-9]+$/,
                                    message: "Pleace enter valid project name",
                                },
                            })}
                        />
                    </form>
                    <Button buttonName={"Cencel"}/>
                    </div>
                }
                
            </div>
            <div className="btnNewProcess">
                <Button buttonName={"Add new process"} click={addNewProcess} />
            </div>
            <div className="processesContainer">
                {project.processes.map(process =>
                    <Process process={process} project={project} />
                )}
            </div>
        </>
    )
}

export default InfoProject;