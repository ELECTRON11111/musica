import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Search from "../../components/Search/Search";
import TopContent from "../../components/TopContent/TopContent";
import TopNav from "../../components/TopNav/TopNav";
import Modal from "../../components/UI/Modal/Modal";
import SideDrawer from "../../components/NavBar/SideDrawer/SideDrawer";
import Releases from "../../components/Releases/Releases";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import Collections from "../Collections/Collections";
// The TopNav is for smaller displays

const Content = () => {
    const home = (
        <React.Fragment >
            <Search />
            <TopContent />
            <Releases />
        </React.Fragment>
    )

    const [isOpened, setIsOpened] = useState(false);

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
                <Route path="/collections" element={<Collections />} />
            </Routes>
        </div>
    );
}

export default Content;
