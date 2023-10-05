import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store";
import { addUserAction } from "../../store/reducers/usersReducer";
import { TUsers } from "../../types/typesUsersReducer";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Registration.scss"
import { TTask } from "../../types/typesProjectsReducer";


const Registration: React.FC = () => {

    const dispatch = useDispatch()
    const { users } = useSelector((state: RootState) => state.users)
    const navigate = useNavigate()

    const { register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm<TUsers>({
        mode: "onChange"
    });

    const onSubmit = (data: TUsers): void => {
        const executorProcess: string = ""
        const currentTasks: TTask[] = []
        const plannedTasks: TTask[] = []
        const complatedTasks: TTask[] = []
        const newUser: TUsers = { id: Date.now(), ...data, executorProcess, currentTasks, plannedTasks, complatedTasks }
        dispatch(addUserAction(newUser))
        navigate("/")
        reset()
    }
    const password = watch("password");


    return (
        <div className="registrationContainer">
            <h1>Registraion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputInfo">
                    <span>Login:</span>
                    <Input
                        register={register("login", {
                            required: "Enter login",
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "Pleace enter valid login",
                            },
                            minLength: 5
                        })}
                        placeholder={""} />
                    {errors?.login && (<div className="error errorLogin">{errors.login.message}</div>)}
                </div>
                <div className="inputInfo">
                    <span>Password:</span>
                    <Input
                        register={register("password", {
                            required: "Enter password",
                            pattern: {
                                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                message: "Valid password(A, a, !-*, 0-9)",
                            },
                            minLength: 5
                        })}
                        placeholder={""} />
                    {errors?.password && (<div className="error errorPassword">{errors.password.message}</div>)}

                </div>
                <div className="inputInfo">
                    <span>Password again:</span>
                    <Input
                        register={register("confirmPassword", {
                            required: "Confirm the password",
                            validate: (value) => value === password || "Passwords do not match",

                        })}
                        placeholder={""}
                    />
                    {errors?.confirmPassword && (<div className="error errorConfPass">{errors.confirmPassword.message}</div>)}
                </div>
                <div className="inputInfo">
                    <span>Name:</span>
                    <Input
                        register={register("firstName", {
                            required: "Enter name",
                            pattern: {
                                value: /^[а-яА-ЯёЁєЄїЇіІa-zA-Z]+$/,
                                message: "Enter your name"
                            },
                            minLength: 2
                        })}
                        placeholder={""}
                    />
                    {errors?.firstName && (<div className="error errorFirstName">{errors.firstName.message}</div>)}

                </div>
                <div className="inputInfo">
                    <span>Last name:</span>
                    <Input
                        register={register("lastName", {
                            required: "Enter last name",
                            pattern: {
                                value: /^[а-яА-ЯёЁєЄїЇіІa-zA-Z]+$/,
                                message: "Enter your last name"
                            },
                            minLength: 5,
                        })}
                        placeholder={""} />
                    {errors?.lastName && (<div className="error errorLastName">{errors.lastName.message}</div>)}
                </div>
                <div className="inputInfo">
                    <span>Email:</span>
                    <Input
                        register={register("email", {
                            required: "Enter email",
                            pattern: {
                                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
                                message: "Valid email (0-9 a-z Z-A @ .)",
                            },
                            minLength: 5,
                        })}
                        placeholder={""} />
                    {errors?.email && (<div className="error errorEmail">{errors.email.message}</div>)}
                </div>
                <div className="inputInfo">
                    <span>Phone number:</span>
                    <label htmlFor=""></label>
                    <Input
                        register={register("phone", {
                            required: "Enter phone number",
                            pattern: {
                                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                message: "Enter valid phone"
                            }
                        })}
                        placeholder={""}
                    />
                    {errors?.phone && (<div className="error errorPhone">{errors.phone.message}</div>)}
                </div>
                <div className="btn">
                    <Button buttonName="Create account" />
                </div>
            </form>
            <p>By pressing the button I agree
                with privacy policy</p>
        </div>
    )
}

export default Registration;