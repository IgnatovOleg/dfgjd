import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { activeProcessAction, removeProcessListAction, removeProcessTitleAction } from "../../store/reducers/projectsReducer";
import { TProcesses, TProject } from "../../types/typesProjectsReducer";
import Input from "../input/Input";
import { DataForm } from "../projectWindow/ProjectWindow";
import "./Process.scss"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';


interface IProcessProps {
    process: TProcesses,
    project: TProject,
    newSizeForClickOnProcess: (process: TProcesses) => void,
    setSizeWindow: (sizeWindow: boolean) => void,
    visibleUserChoice: boolean,
    setVisibleUserChoice: (visibleUserChoice: boolean) => void
}



const Process: React.FC<IProcessProps> = ({ process, project, newSizeForClickOnProcess, setSizeWindow, visibleUserChoice, setVisibleUserChoice }) => {

    const [titleProcess, setTitleProcess] = useState<boolean>(false)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<DataForm>({
        mode: "onChange"
    })

    const newNameProcess = (data: any) => {
        dispatch(removeProcessTitleAction(project, process, data))
        setTitleProcess(true)
        reset()
    }

    const removeProcessList = (project: TProject, process: TProcesses) => {
        dispatch(removeProcessListAction(project, process))
    }

    const activeProcess = (e: React.MouseEvent) => {
        if (e.target instanceof HTMLInputElement) return
        dispatch(activeProcessAction(project, process))
        newSizeForClickOnProcess(process)
    }



    return (
        <div className="processContainer" onClick={(e) => activeProcess(e)}>
            <div className="titleProcess">
                {titleProcess
                    ? <h3>{process.title}</h3>
                    : <form onSubmit={handleSubmit(newNameProcess)}>
                        <Input
                            register={register("title", {
                                required: "Your project name?",
                                pattern: {
                                    value: /^[a-zA-Z0-9]+$/,
                                    message: "Pleace enter valid project name [a-zA-Z0-9]",
                                },
                                minLength: 1
                            })}
                            placeholder="enter the process name"
                        />
                        {errors?.title && (<div className="errorTitle">{errors.title.message}</div>)}

                    </form>
                }
            </div>
            <div className="buttonsProcess" onClick={(e) => e.stopPropagation()}>
                <BsFillPeopleFill className="btnStyle" onClick={() => setVisibleUserChoice(!visibleUserChoice)}/>
                {titleProcess
                    ? <AiOutlineEdit className="btnStyle" onClick={() => setTitleProcess(false)} />
                    : <MdOutlineKeyboardReturn className="btnStyle" onClick={() => setTitleProcess(true)} />
                }

                <RiDeleteBin2Line className="btnStyle" onClick={() => removeProcessList(project, process)} />
            </div>
        </div>
    )
}

export default Process;