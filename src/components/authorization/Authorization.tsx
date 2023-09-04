import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { authorizationAction } from "../../store/reducers/usersReducer";
import { Iusers, TUsers } from "../../types/typesUsersReducer";
import Button from "../button/Button";
import Input from "../input/Input";
import "./Authorization.scss"


const Authorization: React.FC = () => {

    const { register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TUsers>({
        mode: "onChange"
    });

    const navigate = useNavigate()

    const { users } = useSelector((state: RootState) => state.users)
    console.log(users, "users");
    

    const dispatch = useDispatch()



    const onSubmit = (data: TUsers) => {
        let userFound = false

        for (let a of users) {
            if (data.login === a.login && data.password === a.password) {
                userFound = true;
                dispatch(authorizationAction(a))
                navigate("/homePage")
                break;
            }
        }
        if (!userFound) alert("entered incorrect login or password or there is no such user")
        reset()
    }

    return (
        <div className="authorizationContainer">
            <h1>Welcome to you</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register("login", {
                        required: "Your login?",
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message: "Pleace enter valid login",
                        },
                    })}
                    placeholder={"Your login"}
                />
                {errors?.login && (<div className="error errorLogin">{errors.login.message}</div>)}
                <Input
                    typeInput={"password"}
                    register={register("password", {
                        required: "Password pleace",
                        pattern: {
                            value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                            message: "Valid password(A, a, !-*, 0-9)",
                        },
                    })}
                    placeholder={"Your password"}
                />
                {errors?.password && (<div className="error errorPassword">{errors.password.message}</div>)}
                <div className="btn">
                    <Button
                        buttonName={"Sign In"}
                    />
                </div>
            </form>
            <div className="signUp">
                <Link to="/registration">Click here to create your accoun</Link>
            </div>
        </div>
    )
}

export default Authorization;