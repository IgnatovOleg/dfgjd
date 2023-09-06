import React, { useState } from "react";
import "./AdditionalProfileInfo.scss"

import { BsPlusLg } from 'react-icons/bs';
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { TUsers } from "../../types/typesUsersReducer";

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



    const editInfo = (data: TUsers) => {
        console.log(data, "data");
    }



    return (
        <div className="additionalProfileInfoContainer">
            <div className="firstInfo">
                <div className="photoUsers">
                    <BsPlusLg className="addPhoto" />
                </div>
                <div className="nameAndEmail">
                    <h1>Name persone</h1>
                    <h3>Phone number</h3>
                    <h3>Email address</h3>
                </div>
            </div>
            <div className="secondInfo">
                <form onSubmit={handleSubmit(editInfo)}>
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
                        : <h3 onClick={() => setFirstNameEdit(true)}>{user.firstName}</h3>
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
                        : <h3>{user.lastName}</h3>

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
                        : <h3>{user.middleName}</h3>
                    }
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
                        : <h3>{user.phone}</h3>

                    }
                    <Button buttonName="Save changes" />
                </form>
            </div>
        </div >
    )
}

export default AdditionalProfileInfo;