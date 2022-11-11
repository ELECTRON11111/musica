import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Content from "../Content/Content";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import classes from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={classes.Container}>
            {/* NavBar and music plauer are fixed in desktop view */}
            <NavBar />
            <Content />
            <MusicPlayer />
        </div>
    )
}

export default Layout;