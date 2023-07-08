import React, { useState } from "react";
import { TProject } from "../../types/typesProjectsReducer";
import "./ProjectWindow.scss";
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from "react-redux";
import { BiWindows } from 'react-icons/bi';
import { BiWindow } from 'react-icons/bi';
import { removeProjectsAction } from "../../store/reducers/projectsReducer";
import InfoProject from "./InfoProject";



interface ProjectWindowProps {
    project: TProject,

}

export type DataForm = {
    title: string
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ project }) => {


    const [sizeWindow, setSizeWindow] = useState<boolean>(false)

    const dispatch = useDispatch()

    const removeProjects = (project: TProject) => {
        dispatch(removeProjectsAction(project))
    }




    return (
        <div className={`projectWindowContainer ${sizeWindow ? "bigWindow" : ""}`}>
            <div className="windowControl">
                {sizeWindow
                    ? <BiWindows className="smallIcon" onClick={() => setSizeWindow(false)} />
                    : <BiWindow className="smallIcon" onClick={() => setSizeWindow(true)} />
                }
                <RxCross2 className="crossIcon" onClick={() => removeProjects(project)} />
            </div>
            <InfoProject project={project} sizeWindow={sizeWindow} setSizeWindow={setSizeWindow} />
        </div>
    )
}

export default ProjectWindow;