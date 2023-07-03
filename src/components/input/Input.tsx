import React from "react";
import "./Input.scss"

interface IpropsInput {
    placeholder?: string,
    register?: any,
    typeInput?: string,
}


const Input:React.FC <IpropsInput> = ({placeholder, register, typeInput}) => {



    return(
        <div className="inputContainer">
            <input 
            type={typeInput}
            placeholder={placeholder}
            {...register}
            />
        </div>
    )
}

export default Input;