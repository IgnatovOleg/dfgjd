import React, { useState } from "react";
import { TProject } from "../../types/typesProjectsReducer";
import "./ProjectWindow.scss";
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from "react-redux";
import { BiWindows } from 'react-icons/bi';
import { BiWindow } from 'react-icons/bi';
import { removeProjectsAction, removeProjectTitleAction } from "../../store/reducers/projectsReducer";
import Input from "../input/Input";
import { useForm } from "react-hook-form";



interface ProjectWindowProps {
    project: TProject,
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ project }) => {

    const [sizeWindow, setSizeWindow] = useState<boolean>(false)
    const [titleProject, setTitleProject] = useState<boolean>(true)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange"
    })


    const dispatch = useDispatch()

    const removeProjects = (project: TProject) => {
        dispatch(removeProjectsAction(project))
    }
    const newTitle = (data: TProject) => {
        dispatch(removeProjectTitleAction(data))
        setTitleProject(!titleProject)
    }



    return (
        <div
            className={`projectWindowContainer ${sizeWindow ? "bigWindow" : ""}`}
        >
            <div className="topWindow">
                {titleProject
                    ? <h1 onClick={() => setTitleProject(false)}>{project.title}</h1>
                    : <form onSubmit={handleSubmit(newTitle)}>
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
        </div>
    )
}

export default ProjectWindow;