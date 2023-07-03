import React, { CSSProperties } from "react";
import "./Button.scss"

interface IbuttonProps {
    buttonName: string;
}


const Button:React.FC <IbuttonProps> = ({buttonName}) => {


    return (
        <div className="signIn" id="">
            <button type="submit">{buttonName}</button>
        </div>
    )
}
export default Button;