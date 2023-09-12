import React, { useState } from "react";
import "./UserMenu.scss"
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import { BiSolidLeftArrow } from 'react-icons/bi';


interface UserMenuProps {
    visibleProfileInfo: boolean,
    setVisibleProfileInfo: (visibleProfileInfo: boolean) => void,
    visibleAccountSettings: boolean,
    setVisibleAccountSettings: (visibleAccountSettings: boolean) => void
}


const UserMenu: React.FC<UserMenuProps> = ({ visibleProfileInfo, setVisibleProfileInfo, visibleAccountSettings, setVisibleAccountSettings }) => {

    const [versionIconAboutMe, setVersionIconAboutMe] = useState<boolean>(false)
    const [versionIconSettings, setVersionIconSettings] = useState<boolean>(false)


    const newIconAboutMe = () => {
        setVersionIconAboutMe(true)
        setVersionIconSettings(false)
    }
    const newIconSetting = () => {
        setVersionIconSettings(true)
        setVersionIconAboutMe(false)
    }
    const visibleInfo = () => {
        setVisibleAccountSettings(false)
        setVisibleProfileInfo(!visibleProfileInfo)
    }

    const visibleSettings = () => {
        setVisibleProfileInfo(false)
        setVisibleAccountSettings(!visibleAccountSettings)
    }


    return (
        <div className="userMenuContainer">
            <div className="item"
                onMouseEnter={() => newIconAboutMe()} onMouseLeave={() => setVersionIconAboutMe(false)}
                onClick={() => visibleInfo()}
            >
                {versionIconAboutMe
                    ? <BiSolidLeftArrow className={`svg ${visibleProfileInfo ? "leftShift" : ""}`} />
                    : <BsFillPeopleFill className="svg" />
                }
                <span>About me</span>
            </div>
            <div className="item"
                onMouseEnter={() => newIconSetting()} onMouseLeave={() => setVersionIconSettings(false)}
                onClick={() => visibleSettings()}
            >
                {versionIconSettings
                    ? <BiSolidLeftArrow className={`svg ${visibleAccountSettings ? "leftShift" : ""}`} />
                    : <MdSettings className="svg" />
                }
                <span>Settings</span>
            </div>
        </div>
    )
}

export default UserMenu;