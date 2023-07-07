import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { removeProcessListAction, removeProcessTitleAction } from "../../store/reducers/projectsReducer";
import { TProcesses, TProject } from "../../types/typesProjectsReducer";
import Input from "../input/Input";
import { DataForm } from "../projectWindow/ProjectWindow";
import "./Process.scss"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';


interface IProcessProps {
    process: TProcesses,
    project: TProject,
}



const Process: React.FC<IProcessProps> = ({ process, project }) => {

    const [titleProcess, setTitleProcess] = useState<boolean>(false)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<DataForm>({
        mode: "onChange"
    })

    const newNameProcess = (data: any) => {
        dispatch(removeProcessTitleAction(project, process, data))
        setTitleProcess(true)
    }

    const removeProcessList = (proj: TProject, proc: TProcesses) => {
        dispatch(removeProcessListAction(proj, proc))
    }



    return (
        <div className="processContainer">
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
                        />
                        {errors?.title && (<div className="errorTitle">{errors.title.message}</div>)}

                    </form>
                }
            </div>
            <div className="buttonsProcess">
                <AiOutlineEdit className="btnStyle" onClick={() => setTitleProcess(false)} />
                <RiDeleteBin2Line className="btnStyle" onClick={() => removeProcessList(project, process)} />
            </div>
        </div>
    )
}

export default Process;