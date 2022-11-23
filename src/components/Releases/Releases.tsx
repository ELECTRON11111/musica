import React from "react";
import classes from "./Releases.module.css";
import ReleaseItem from "./ReleaseItem/ReleaseItem";

function Releases() {
    const songs = [
        {
            src: "album/img-21.png",
            title: "Life in a bubble."
        },
        {
            src: "album/Rectangle 15.png",
            title: "Mountain"
        },
        {
            src: "album/Rectangle 17.png",
            title: "Everything's black"
        },
        {
            src: "album/Rectangle 19.png",
            title: "Cancelled"
        },
        {
            src: "album/Rectangle 20.png",
            title: "Nomad"
        },
        {
            src: "album/Rectangle 18.png",
            title: "Blind"
        }
    ]
    return (
        <div className={classes.Container}>
            <h2>New Releases.</h2>
            <div className={classes.release_items}>
                {songs.map(song => {
                    return (
                        <ReleaseItem 
                            imgSrc={song.src} 
                            title={song.title} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Releases;