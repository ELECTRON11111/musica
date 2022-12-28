import React, { useState, useEffect } from "react";
import SongsContext from "../../SongsContext/SongsContext";
import NavBar from "../../components/NavBar/NavBar";
import Content from "../Content/Content";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import classes from "./Layout.module.css";

const Layout = (props: any) => {
    const [data, setData] = useState({id: "new-2", allSongs: [{
        artist: "Ayra Starr",
        audio: "https://musica-api.onrender.com/audio/audio_2.mp3",
        cover: "https://musica-api.onrender.com/cover/cover_2.jpeg",
        duration: "2:35",
        id: "new-2",
        title: "Rush" 
    }]});

    useEffect(() => {
        console.log(data);
    }, [data]);
    
    return (
        <div className={classes.Container}>
            <SongsContext.Provider value = {{data, setData}}>
                {/* NavBar and music player are fixed in desktop view */}
                <NavBar {...props} />
                <Content {...props} />
                <MusicPlayer {...props} />    
            </SongsContext.Provider>
            
        </div>
    )
}

export default Layout;