import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import HeaderHomePage from "../haderHomePage/HeaderHomePage";
import ModalCreateProject from "../modalCreateProject/ModalCreateProject";
import ProjectWindow from "../projectWindow/ProjectWindow";
import "./HomePage.scss";


const HomePage: React.FC = () => {

    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const [userMenu, setUserMenu] = useState<boolean>(false)
    const [currentWindow, setCurrentWindow] = useState<number | null>(null)
    


    const { projects } = useSelector((state: RootState) => state.projects)

    return (
        <div className="homePageContainer">
            <HeaderHomePage
                setVisibleModal={setVisibleModal}
                userMenu={userMenu} setUserMenu={setUserMenu}
            />
            <div className={`contant ${visibleModal || userMenu  ? "opacityContant" : ""}`}>
                {projects.map(project => (
                    <ProjectWindow key={project.id} project={project} currentWindow={currentWindow} setCurrentWindow={setCurrentWindow} />
                ))}
            </div>
            {visibleModal
                ? <ModalCreateProject setVisibleModal={setVisibleModal} />
                : <div></div>
            }
        </div>
    )
}

export default HomePage;