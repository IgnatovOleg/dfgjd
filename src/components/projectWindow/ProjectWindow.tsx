import React, { useState } from "react";
import { TProject } from "../../types/typesProjectsReducer";
import "./ProjectWindow.scss";
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from "react-redux";
import { BiWindows } from 'react-icons/bi';
import { BiWindow } from 'react-icons/bi';
import { removeProjectsAction } from "../../store/reducers/projectsReducer";
import InfoProject from "../infoProject/InfoProject";
import ProcessWindow from "../processWindow/ProcessWindow";
import TaskExecutor from "../taskExecutor/TaskExecutor";



interface ProjectWindowProps {
    project: TProject,
    currentWindow: number | null,
    setCurrentWindow:(currentWindow: number | null) => void
}

export type DataForm = {
    title: string
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ project, currentWindow, setCurrentWindow }) => {


    const [sizeWindow, setSizeWindow] = useState<boolean>(false)

    const dispatch = useDispatch()

    const removeProjects = (project: TProject) => {
        dispatch(removeProjectsAction(project))
    }
    
    const windowId = () => {
        if(project.id !== currentWindow) {
            setCurrentWindow(project.id)
        } else {
            setCurrentWindow(null)
        }
    }

    const windowsPosition = () => {
        if(currentWindow === null) {
            return { opacity: "1" }
        } else if(currentWindow === project.id) {
            return { opacity: "1" }
        } else {
            return { opacity: "0" }
        }
    }



    return (
        <div style={windowsPosition()  } className={`projectWindowContainer ${sizeWindow ? "bigWindow" : ""}`} onClick={() => windowId()}>
            <div className="windowControl">
                {sizeWindow
                    ? <BiWindows className="smallIcon" onClick={() => setSizeWindow(false)} />
                    : <BiWindow className="smallIcon" onClick={() => setSizeWindow(true)} />
                }
                <RxCross2 className="smallIcon" onClick={() => removeProjects(project)} />
            </div>
            <div className="windowContant">
                <InfoProject project={project} sizeWindow={sizeWindow} setSizeWindow={setSizeWindow}/>
                {project.processes.map(process =>
                    <div className={process.is_active ? "processBlock" : "processNone"}>
                        {process.is_active
                            ? <ProcessWindow project={project} process={process}/>
                            : <div></div>
                        }
                        {process.is_active
                            ? <TaskExecutor/>
                            : <div></div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectWindow;