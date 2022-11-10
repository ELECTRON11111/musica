import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Content from "../Content/Content";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

const Layout = () => {
    return (
        <React.Fragment>
            {/* NavBar and music plauer are fixed in desktop view */}
            <NavBar />
            <Content />
            <MusicPlayer />
        </React.Fragment>
    )
}

export default Layout;