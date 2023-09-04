import React from "react";
import "./AdditionalProfileInfo.scss"

import { BsPlusLg } from 'react-icons/bs';
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import { TUsers } from "../../types/typesUsersReducer";

interface AdditionalProfileInfoProps {
    visibleProfileInfo: boolean,
    setVisibleProfileInfo: (visibleProfileInfo: boolean) => void
}


const AdditionalProfileInfo: React.FC<AdditionalProfileInfoProps> = ({ visibleProfileInfo, setVisibleProfileInfo }) => {

    const { register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm<TUsers>({
        mode: "onChange"
    });



    return (
        <div className="additionalProfileInfoContainer">
            <div className="firstInfo">
                <div className="photoUsers">
                    <BsPlusLg className="addPhoto" />
                </div>
                <div className="nameAndEmail">
                    <h1>Name persone</h1>
                    <h2>Position</h2>
                    <h4>Phone number</h4>
                    <h4>Email address</h4>
                </div>
            </div>
            <div className="secondInfo">
                <div className="editInfo">
                    <h4>Name</h4>
                    <Input
                        register={register("firstName", {
                            required: "Enter first name",
                            pattern: {
                                value: /^[а-яА-ЯёЁєЄїЇіІa-zA-Z]+$/,
                                message: "Pleace enter valid first name",
                            },
                            minLength: 5
                        })}
                        placeholder={"Edit your name"} />
                </div>
                <div className="editInfo">
                    <h4>Last Name</h4>
                    <Input
                        register={register("lastName", {
                            required: "Enter last name",
                            pattern: {
                                value: /^[а-яА-ЯёЁєЄїЇіІa-zA-Z]+$/,
                                message: "Pleace enter valid last name",
                            },
                            minLength: 5
                        })}
                        placeholder={"Edit your last name"} />
                </div>
                <div className="editInfo">
                    <h4>Middle name</h4>
                    <Input
                        register={register("middleName", {
                            required: "Enter middle name",
                            pattern: {
                                value: /^[а-яА-ЯёЁєЄїЇіІa-zA-Z]+$/,
                                message: "Pleace enter valid middle name",
                            },
                            minLength: 5
                        })}
                        placeholder={"Edit your middle name"} />
                </div>
                <div className="editInfo">
                    <h4>Your phone number</h4>
                    <Input
                        register={register("phone", {
                            required: "Enter your phone",
                            pattern: {
                                value: /^[а-яА-ЯёЁєЄїЇіІa-zA-Z]+$/,
                                message: "Pleace enter valid middle name",
                            },
                            minLength: 5
                        })}
                        placeholder={"Edit your phone"} />
                </div>
                <div className="editInfo">
                    <h4>Your email</h4>
                    <Input
                        register={register("email", {
                            required: "Enter your email",
                            pattern: {
                                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i,
                                message: "Pleace enter valid middle name",
                            },
                            minLength: 5
                        })}
                        placeholder={"Edit your phone"} />
                </div>
            </div>
            <Button buttonName="Save changes" />
        </div>
    )
}

export default AdditionalProfileInfo;