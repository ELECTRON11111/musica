import React from "react";
import classes from "./SongInfo.module.css";
import defaultSongImage from "../../../../public/album/img-21.png";

interface Song {
    src: string;
    title: string;
    artist: string
}

const SongInfo = (props: Song) => {
    return (
        <div className={classes.Container}>
            <img src={props.src} alt={"songImg"} />
            <div className={classes.Text}>
                <span>{props.title}</span>
                <p>{props.artist}</p>
            </div>
        </div>      
    )
}

SongInfo.defaultProps = {
    src: "album/img-21.png",
    title: "Seasons In",
    artist: "James"
}

export default SongInfo;