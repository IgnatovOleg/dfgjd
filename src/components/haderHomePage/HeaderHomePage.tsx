import React from "react";
import "./HeaderHomePage.scss";
import Button from "../button/Button";
import { BsTrello } from 'react-icons/bs';
import { MdOutlineExitToApp } from 'react-icons/md';
import { useNavigate } from "react-router-dom";


interface HeaderHomePageProps {
    setVisibleModal: (svisibleModal: boolean) => void,
}


const HeaderHomePage:React.FC <HeaderHomePageProps> = ({setVisibleModal}) => {

    
    const navigate = useNavigate()

    const exit = () => {
        navigate("/")
    }

    return (
        <div className="headerHomePageContainer">
            <div className="logo">
                <BsTrello className="icon"/>
            </div>
            <h2>Trello</h2>
            <div className="btnHeader" onClick={() => setVisibleModal(true)}>
                <Button buttonName={"Create project"}/>
            </div>
            <MdOutlineExitToApp className="exitIcon" onClick={() => exit()}/>
        </div>
    )
}

export default HeaderHomePage;