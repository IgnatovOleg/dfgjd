import React, { useState } from "react";
import "./UserMenu.scss"
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import { BiSolidLeftArrow } from 'react-icons/bi';


const UserMenu: React.FC = () => {

    const [versionIconAboutMe, setVersionIconAboutMe] = useState<boolean>(false)
    const [versionIconSettings, setVersionIconSettings] = useState<boolean>(false)
    const [positionArrowAboutMe, setPositionArrowAboutMe] = useState<boolean>(false)
    const [positionArrowSettings, setPositionArrowSettings] = useState<boolean>(false)


    const newIconAboutMe = () => {
        setVersionIconAboutMe(true)
        setVersionIconSettings(false)
    }
    const newIconSetting = () => {
        setVersionIconSettings(true)
        setVersionIconAboutMe(false)
    }

    return (
        <div className="userMenuContainer">
            <div className="item" onMouseEnter={() => newIconAboutMe()} onClick={() => setPositionArrowAboutMe(!positionArrowAboutMe)}>
                {versionIconAboutMe
                    ? <BiSolidLeftArrow className={`svg ${positionArrowAboutMe ? "leftShift" : ""}`} />
                    : <BsFillPeopleFill className="svg" />
                }
                <span>About me</span>
            </div>
            <div className="item" onMouseEnter={() => newIconSetting()}>
                {versionIconSettings
                    ? <BiSolidLeftArrow className={`svg ${positionArrowSettings ? "leftShift" : ""}`} />
                    : <MdSettings className="svg" />
                }
                <span>Settings</span>
            </div>
        </div>
    )
}

export default UserMenu;