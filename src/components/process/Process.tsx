import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { activeProcessAction, removeProcessListAction, removeProcessTitleAction } from "../../store/reducers/projectsReducer";
import { TProcesses, TProject } from "../../types/typesProjectsReducer";
import Input from "../input/Input";
import { DataForm } from "../projectWindow/ProjectWindow";
import "./Process.scss"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { LiaUserTimesSolid } from 'react-icons/lia';
import { RootState } from "../../store";
import { TUsers } from "../../types/typesUsersReducer";
import { assignProcessAction } from "../../store/reducers/usersReducer";


interface IProcessProps {
    process: TProcesses,
    project: TProject,
    newSizeForClickOnProcess: (process: TProcesses) => void,
    sizeWindow: boolean,
    setSizeWindow: (sizeWindow: boolean) => void,
    visibleUserChoice: boolean,
    setVisibleUserChoice: (visibleUserChoice: boolean) => void
}



const Process: React.FC<IProcessProps> = ({ process, project, newSizeForClickOnProcess, sizeWindow, setSizeWindow, visibleUserChoice, setVisibleUserChoice }) => {

    const [titleProcess, setTitleProcess] = useState<boolean>(false)
    const [assignedExecutor, setAssignedExecutro] = useState<boolean>(false)

    const { users } = useSelector((state: RootState) => state.users) as { users: TUsers[] }

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
        for (let user of users) {
            if (user.executorProcess === process.title) {
                dispatch(assignProcessAction(data.title, user))
            }
        }
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

    const userChoice = () => {
        setVisibleUserChoice(true)
        setAssignedExecutro(true)
    }

    const userSuspension = () => {
        const name: string = "none"
        for(let user of users) {
            if(user.executorProcess === process.title) {
                dispatch(assignProcessAction(name, user))
                console.log(user, "user");
            }
        }
        setAssignedExecutro(false)
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
                {assignedExecutor
                    ? <>
                        {users.map(user =>
                            <>
                                {user.executorProcess === process.title
                                    ? <LiaUserTimesSolid className="btnStyle" onClick={() => userSuspension()}/>
                                    : <div></div>
                                }
                            </>
                        )}
                      </>
                    : <>
                        {process.is_active
                            ? <BsFillPeopleFill className="btnStyle" onClick={() => userChoice()} />
                            : <div></div>
                        }
                      </>
                }
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