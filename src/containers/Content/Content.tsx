import React, {useState, useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Search from "../../components/Search/Search";
import TopContent from "../../components/TopContent/TopContent";
import TopNav from "../../components/TopNav/TopNav";
// import Modal from "../../components/UI/Modal/Modal";
import SideDrawer from "../../components/NavBar/SideDrawer/SideDrawer";
import Releases from "../../components/Releases/Releases";
import Playlist from "../Playlist/Playlist";
// import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import Collections from "../Collections/Collections";
// The TopNav is for smaller displays


const Content = (props: any) => {
    const [isOpened, setIsOpened] = useState(false);

    const home = (
        <React.Fragment {...props}>
            <Search />
            <TopContent />
            <Releases 
                type = {"New Releases."} 
                route = "new" 
            />

            <Releases 
                type = {"Popular in your area"} 
                route = "popular" 
            />
        </React.Fragment>
    );


    const openedHandler = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div style={{
            width: "100vw"
        }}>
            <TopNav drawerClicked = {(e: any): any => openedHandler()}/>
            <SideDrawer open={isOpened} closed = {(e:any) => openedHandler()}/>
            <Routes>
                <Route path= "/" element = {home}  />
                {/* this route has * since it'd render other routes deep in itself */}
                <Route path="/collections/*" element={<Collections />} />
                <Route path="/playlist/:id" element={<Playlist {...props} />} />
                {/* 404 case for unknown paths*/}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

const Text = styled.h1`
    font-weight: 700;
    font-size: 3rem;
    line-height: 120%;
    color: white;
    margin-bottom: 1.1rem;

    @media (max-width: 450px){
        font-size: 1rem;
    }
`;

// 404 page
const PageNotFound = () => {  

    return (
        <div style={{
                padding: "4rem", 
                width: "100%", 
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Text>404, pageNotFound.</Text>
            <h3>probably under construction..</h3>
        </div>
    )  
}



export default Content;
