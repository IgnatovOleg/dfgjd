import React, { useState } from "react";
import { TUsers } from "../../types/typesUsersReducer";
import "./AccountSettings.scss"
import Button from "../button/Button";
import Input from "../input/Input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editUserInfoAction } from "../../store/reducers/usersReducer";


interface AccountSettingsProps {
    user: TUsers
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ user }) => {

    const [visibleEditLogin, setVisibleEditLogin] = useState<boolean>(false)
    const [visibleEditPassword, setVisibleEditPassword] = useState<boolean>(false)

    const dispatch = useDispatch()





    const { register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm<TUsers>({
        mode: "onChange"
    });


    const editLogin = (data: TUsers) => {
        dispatch(editUserInfoAction(data, user))
        setVisibleEditLogin(false)
        reset()
    }
    const editPassword = (data: TUsers) => {
        console.log(data, "data");
        
        dispatch(editUserInfoAction(data, user))
        setVisibleEditPassword(false)
        reset()
    }
    const password = watch("password");


    return (
        <div className="accountSettingsContainer">
            <h2>Account settings</h2>
            <Button buttonName={visibleEditLogin ? "Cancel edit" : "Edit login"} click={() => setVisibleEditLogin(!visibleEditLogin)} />
            <form onSubmit={handleSubmit(editLogin)}>
                <div className={`editSettings ${visibleEditLogin ? "" : "notVisible"}`}>
                    <Input
                        register={register("login", {
                            required: "Your login?",
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: "Pleace enter valid login a-zA-Z0-9",
                            },
                        })}
                        placeholder={"Enter new login?"}
                        typeInput="text"
                    />
                    {errors?.login && (<div className="error errorLogin">{errors.login.message}</div>)}
                </div>
            </form>
            <Button buttonName={visibleEditPassword ? "Cancel edit" : "Edit password"} click={() => setVisibleEditPassword(!visibleEditPassword)} />
            <form onSubmit={handleSubmit(editPassword)}>
                <div className={`editSettings ${visibleEditPassword ? "" : "notVisible"}`}>
                    <Input
                        register={register("password", {
                            required: "Enter password",
                            pattern: {
                                value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                                message: "Valid password(A, a, !-*, 0-9)",
                            },
                            minLength: 5
                        })}
                        placeholder={"Enter new password"}
                        typeInput="password" />

                    {errors?.password && (<div className="error errorPassword">{errors.password.message}</div>)}
                    <Input
                        register={register("confirmPassword", {
                            required: "Confirm the password",
                            validate: (value) => value === password || "Passwords do not match",

                        })}
                        placeholder={"Confirm new password"}
                        typeInput="password" />
                    {errors?.confirmPassword && (<div className="error errorConfPass">{errors.confirmPassword.message}</div>)}
                </div >
            </form>
        </div >
    )
}

export default AccountSettings;