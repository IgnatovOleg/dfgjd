import React, { useState } from "react";
import { TProcesses, TProject } from "../../types/typesProjectsReducer";
import "./ProjectWindow.scss";
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from "react-redux";
import { BiWindows } from 'react-icons/bi';
import { BiWindow } from 'react-icons/bi';
import { addNewProcessAction, removeProjectsAction, removeProjectTitleAction } from "../../store/reducers/projectsReducer";
import Input from "../input/Input";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import Process from "../process/Process";



interface ProjectWindowProps {
    project: TProject,
}

export type DataForm = {
    title: string
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ project }) => {

    const [sizeWindow, setSizeWindow] = useState<boolean>(false)
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



    const removeProjects = (project: TProject) => {
        dispatch(removeProjectsAction(project))
    }

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
        <div
            className={`projectWindowContainer ${sizeWindow ? "bigWindow" : ""}`}
        >
            <div className="topWindow">
                {titleProject
                    ? <h1 onClick={() => setTitleProject(false)}>{project.title}</h1>
                    : <form onSubmit={handleSubmit(renameProject)}>
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
                }
                {sizeWindow
                    ? <BiWindows className="smallIcon" onClick={() => setSizeWindow(false)} />
                    : <BiWindow className="smallIcon" onClick={() => setSizeWindow(true)} />
                }
                <RxCross2 className="crossIcon" onClick={() => removeProjects(project)} />
            </div>
            <div className="btnNewProcess">
                <Button buttonName={"Add new process"} click={addNewProcess}/>
            </div>
            <div className="pocessesContainer">
                {project.processes.map(process =>
                    <div className="processBlock">
                        <Process process={process} project={project}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectWindow;