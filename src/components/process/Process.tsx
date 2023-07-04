import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { removeProcessTitleAction } from "../../store/reducers/projectsReducer";
import { TProcesses, TProject } from "../../types/typesProjectsReducer";
import Input from "../input/Input";
import { DataForm } from "../projectWindow/ProjectWindow";
import "./Process.scss"

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



    return (
        <div className="processContainer">
            {titleProcess
                ? <h3 onClick={() => setTitleProcess(false)}>{process.title}</h3>
                : <form onSubmit={handleSubmit(newNameProcess)}>
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
        </div>
    )
}

export default Process;