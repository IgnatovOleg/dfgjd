import React from "react";
import { TUsers } from "../../types/typesUsersReducer";
import "./AccountSettings.scss"
import Button from "../button/Button";

interface AccountSettingsProps {
    user: TUsers
}

const AccountSettings: React.FC<AccountSettingsProps> = ({user}) => {



    return(
        <div className="accountSettingsContainer">
            <h2>Account settings</h2>
            <Button buttonName="Edit login"/>
            <Button buttonName="Edit password"/>
        </div>
    )
}

export default AccountSettings;