import React from "react";
import classes from "./Releases.module.css";
import ReleaseItem from "./ReleaseItem/ReleaseItem";

interface propType {
    type: string;
    route: string;
}

function Releases(props: propType) {
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
            src: "album/Rectangle 20.png",
            title: "Nomad"
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
        <div 
            className={classes.Container}
            style = {props.route === "popular"? {
                marginBottom: "110px"
            }: {}}
        >
            <h2>{props.type}</h2>
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