import React, { useState } from "react";
import "./AdditionalProfileInfo.scss"

import { BsPlusLg } from 'react-icons/bs';
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { TUsers } from "../../types/typesUsersReducer";
import { useDispatch } from "react-redux";
import { editUserInfoAction } from "../../store/reducers/usersReducer";

interface AdditionalProfileInfoProps {
    user: TUsers
}


const AdditionalProfileInfo: React.FC<AdditionalProfileInfoProps> = ({ user }) => {

    const { register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm<TUsers>({
        mode: "onChange"
    });

    const [firstNameEdit, setFirstNameEdit] = useState<boolean>(false)
    const [lastNameEdit, setLastNameEdit] = useState<boolean>(false)
    const [middletNameEdit, setMiddleNameEdit] = useState<boolean>(false)
    const [phoneEdit, setPhoneEdit] = useState<boolean>(false)
    const [emailEdit, setEmailEdit] = useState<boolean>(false)

    const dispatch = useDispatch()



    const editInfo = (data: TUsers) => {
        console.log(data, "data");
        dispatch(editUserInfoAction(data, user))
        setFirstNameEdit(false)
        setLastNameEdit(false)
        setMiddleNameEdit(false)
        setPhoneEdit(false)
        setEmailEdit(false)
    }



    return (
        <div className="additionalProfileInfoContainer">
            <h2>Info about profile </h2>
            <div className="mainInfo">
                <div className="photoUsers">
                    <BsPlusLg className="addPhoto" />
                </div>
                <div className="info">
                    <form onSubmit={handleSubmit(editInfo)}>
                        <div>
                            {firstNameEdit
                                ? <Input
                                    register={register("firstName", {
                                        required: "Your first name?",
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+$/,
                                            message: "Pleace enter valid first name",
                                        },
                                    })}
                                    typeInput="text"
                                    placeholder="Edit you first name" />
                                : <h3 title="Click me for edit information" onClick={() => setFirstNameEdit(true)}>{user.firstName}</h3>
                            }
                            {lastNameEdit
                                ? <Input
                                    register={register("lastName", {
                                        required: "Your last name?",
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+$/,
                                            message: "Pleace enter valid last name",
                                        },
                                    })}
                                    typeInput="text"
                                    placeholder="Edit you last name" />
                                : <h3 title="Click me for edit information" onClick={() => setLastNameEdit(true)}>{user.lastName}</h3>

                            }
                            {middletNameEdit
                                ? <Input
                                    register={register("middleName", {
                                        required: "Your first name?",
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+$/,
                                            message: "Pleace enter valid first name",
                                        },
                                    })}
                                    typeInput="text"
                                    placeholder="Edit you middle name" />
                                : <h3 title="Click me for edit information" onClick={() => setMiddleNameEdit(true)}>{user.middleName}</h3>
                            }
                        </div>
                        <div>
                            {phoneEdit
                                ? <Input
                                    register={register("phone", {
                                        required: "Your first name?",
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+$/,
                                            message: "Pleace enter valid first name",
                                        },
                                    })}
                                    typeInput="tel"
                                    placeholder="Edit you phone"
                                />
                                : <h3 title="Click me for edit information" onClick={() => setPhoneEdit(true)}>{user.phone}</h3>
                            }
                            {emailEdit
                                ? <Input
                                    register={register("email", {
                                        required: "Enter email",
                                        pattern: {
                                            value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
                                            message: "Valid email (0-9 a-z Z-A @ .)",
                                        },
                                        minLength: 5,
                                    })} />
                                : <h3 title="Click me for edit information" onClick={() => setEmailEdit(true)}>{user.email}</h3>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <Button buttonName="Save changes" click={handleSubmit(editInfo)} />
        </div >
    )
}

export default AdditionalProfileInfo;