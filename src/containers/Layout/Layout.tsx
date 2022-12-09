import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Content from "../Content/Content";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import classes from "./Layout.module.css";

const Layout = (props: any) => {
    return (
        <div className={classes.Container}>
            {/* NavBar and music plauer are fixed in desktop view */}
            <NavBar {...props} />
            <Content {...props} />
            <MusicPlayer {...props} />
        </div>
    )
}

export default Layout;