import React from "react";
import Input from "../../input/Input";
import "./InfoField.scss";

interface IinfoFiled {
    nameInfo: string,
    register: any,
    placeholder: string
}


const InfoField:React.FC <IinfoFiled> = ({nameInfo, register, placeholder}) => {



    return(
        <div className="infoFiedContainer">
            <h5>{nameInfo}</h5>
            <Input register={register} placeholder={placeholder}/>
        </div>
    )
}


export default InfoField;