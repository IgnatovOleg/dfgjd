import React, { useState } from "react";
import "./UserMenu.scss"
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdSettings } from 'react-icons/md';
import { BiSolidLeftArrow } from 'react-icons/bi';


interface UserMenuProps {
    visibleProfileInfo: boolean,
    setVisibleProfileInfo: (visibleProfileInfo: boolean) => void
}


const UserMenu: React.FC<UserMenuProps> = ({ visibleProfileInfo, setVisibleProfileInfo }) => {

    const [versionIconAboutMe, setVersionIconAboutMe] = useState<boolean>(false)
    const [versionIconSettings, setVersionIconSettings] = useState<boolean>(false)
    const [positionArrowSettings, setPositionArrowSettings] = useState<boolean>(false)


    const newIconAboutMe = () => {
        setVersionIconAboutMe(true)
        setVersionIconSettings(false)
    }
    const newIconSetting = () => {
        setVersionIconSettings(true)
        setVersionIconAboutMe(false)
    }

    const visibleSetting = () => {
        setVisibleProfileInfo(false)
    }


    return (
        <div className="userMenuContainer">
            <div className="item"
                onMouseEnter={() => newIconAboutMe()} onMouseLeave={() => setVersionIconAboutMe(false)}
                onClick={() => setVisibleProfileInfo(!visibleProfileInfo)}
            >
                {versionIconAboutMe
                    ? <BiSolidLeftArrow className={`svg ${visibleProfileInfo ? "leftShift" : ""}`} />
                    : <BsFillPeopleFill className="svg" />
                }
                <span>About me</span>
            </div>
            <div className="item"
                onMouseEnter={() => newIconSetting()} onMouseLeave={() => setVersionIconSettings(false)}
                onClick={() => visibleSetting()}
            >
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