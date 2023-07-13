import React, { CSSProperties } from "react";
import { TProject } from "../../types/typesProjectsReducer";
import "./Button.scss"

interface IbuttonProps {
    buttonName: string,
    click?: () => void
}


const Button:React.FC <IbuttonProps> = ({buttonName, click}) => {


    return (
        <div className="signIn">
            <button type="submit" onClick={click}>{buttonName}</button>
        </div>
    )
}
export default Button;