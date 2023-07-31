import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import HeaderHomePage from "../haderHomePage/HeaderHomePage";
import ModalCreateProject from "../modalCreateProject/ModalCreateProject";
import ProjectWindow from "../projectWindow/ProjectWindow";
import "./HomePage.scss";


const HomePage: React.FC = () => {

    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    const { projects } = useSelector((state: RootState) => state.projects)


    return (
        <div className="homePageContainer">
            <HeaderHomePage setVisibleModal={setVisibleModal}/>
            <div className={`contant ${visibleModal ? "opacityContant" : ""}`}>
                {projects.map(project => (
                    <ProjectWindow key={project.id} project={project}/>
                ))}
            </div>
            {visibleModal
                ? <ModalCreateProject setVisibleModal={setVisibleModal}/>
                : <div></div>
            }
        </div>
    )
}

export default HomePage;