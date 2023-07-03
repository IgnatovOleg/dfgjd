import React, { useEffect } from "react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addProjectsAction } from "../../store/reducers/projectsReducer";
import { TProject } from "../../types/typesProjectsReducer";
import Button from "../button/Button";
import Input from "../input/Input";
import "./ModalCreateProject.scss"
import { RxCross2 } from 'react-icons/rx';


interface ModalCreateProjectProps {
    setVisibleModal: (svisibleModal: boolean) => void
}

const ModalCreateProject: React.FC<ModalCreateProjectProps> = ({ setVisibleModal }) => {


    const { register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TProject>({
        mode: "onChange"
    });

    const { projects } = useSelector((state: RootState) => state.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(projects, "projects");

    }, [projects])

    const addProject = (data?: TProject) => {
        const newProject: TProject = {
            id: Date.now(),
            title: data?.title
        }
        dispatch(addProjectsAction(newProject))
        setVisibleModal(false)
    }


    return (
        <div className="modalCreateProjectContainer">
            <div className="topProject">
                <h3>Create new project</h3>
                <RxCross2 className="crossIcon" onClick={() => setVisibleModal(false)}/>
            </div>
            <form onSubmit={handleSubmit(addProject)}>
                <Input
                    register={register("title", {
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: "Pleace enter valid login"
                        }
                    })}
                    placeholder={"enter name project"} />
                {errors?.title && (<div className="errorLogin">{errors.title.message}</div>)}
                <div className="btn">
                    <Button buttonName={"Create"} />
                </div>
            </form>
        </div>
    )
}

export default ModalCreateProject;