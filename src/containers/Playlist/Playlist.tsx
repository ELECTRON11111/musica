import React from "react";
import {useParams, useLocation} from "react-router-dom";
import Search from "../../components/Search/Search";
import PlaylistTopSection from "./PlaylistTopSection/PlaylistTopSection";
import Files from "./Files/Files";

import classes from "./Playlist.module.css";

function Playlist(props: any) {
    // this would be used to get the data for this specific playlist
    // params.id would give us the id of the playlist we're to fetch
    let params = useParams();
    let location = useLocation();

    
    const data = [
        {
            "id": "playlist-1",
            "title": "YBNL Playlist",
            "cover": "https://musica-api.onrender.com/cover/play_cover_1.jpg",
            "info": "Yahoo Boy No Laptop Nation, popularly known as YBNL, is an independent record label founded by Olamide in 2012",
            "files": [
                {
                    "id": "ybnl-1",
                    "artist": "Olamide",
                    "duration": "2:35",
                    "title": "We Outside",
                    "cover": "https://musica-api.onrender.com/cover/cover_8.jpeg",
                    "audio": "https://musica-api.onrender.com/audio/audio_8.mp3"
                },
                {
                    "id": "ybnl-2",
                    "artist": "Asake",
                    "duration": "2:33",
                    "title": "PBUY",
                    "cover": "https://musica-api.onrender.com/cover/cover_19.png",
                    "audio": "https://musica-api.onrender.com/audio/audio_19.mp3"
                },
                {
                    "id": "ybnl-3",
                    "artist": "Asake ft Burna Boy",
                    "duration": "3:30",
                    "title": "Sungba Remix",
                    "cover": "https://musica-api.onrender.com/cover/cover_16.jpeg",
                    "audio": "https://musica-api.onrender.com/audio/audio_16.mp3"
                },
                {
                    "id": "ybnl-4",
                    "artist": "Fireboy",
                    "duration": "3:27",
                    "title": "Playboy",
                    "cover": "https://musica-api.onrender.com/cover/cover_17.jpeg",
                    "audio": "https://musica-api.onrender.com/audio/audio_17.mp3"
                }
            ]
        }
    ]

    // document.documentElement.style.setProperty(`--bg`, `url(${data[0].cover}) 120% no-repeat `);
    // document.documentElement.style.setProperty(`--bg`, `linear-gradient(0deg, rgba(10, 10, 10, 0.6), rgba(0, 0, 0, 0.6)), url(${data[0].cover}) 250%`);
    // document.body.style.setProperty("box-shadow", "0px 0px 11px rgba(250, 205, 102, 0.25)")

    return (
        <div className={classes.Container}>
            <Search isIcon = {false} />
            <PlaylistTopSection 
                // cover = {data[0].cover} 
                title = {data[0].title}
                info = {data[0].info}
                length = {`${data[0].files.length} songs - 16 hrs+`}
                cover = {data[0].cover}
            />
            <Files files={data[0].files} playlistName={data[0].title} />
        </div>
    )
}

export default Playlist;