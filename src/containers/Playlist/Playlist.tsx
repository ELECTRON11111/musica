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
            "id": "playlist-4",
            "title": "Ayra Starr Playlist",
            "cover": "https://musica-api.onrender.com/cover/play_cover_4.jpeg",
            "info": "Oyinkansola Sarah Aderibigbe (born 14 June 2002), known professionally as Ayra Starr, is a Nigerian singer. Born in Cotonou, Benin, Ayra Starr began a fashion career at the age of 16 with Quove Model Management before deciding to pursue music.",
            "files": [
                {
                "id": "ayra-1",
                "artist": "Ayra Starr",
                "duration": "3:09",
                "title": "Rush",
                "cover": "https://musica-api.onrender.com/cover/cover_2.jpeg",
                "audio": "https://musica-api.onrender.com/audio/audio_2.mp3"
                },
                {
                "id": "ayra-2",
                "artist": "Magix ft Ayra Starr",
                "duration": "2:26",
                "title": "Love Don't Cost A Dime",
                "cover": "https://musica-api.onrender.com/cover/cover_12.jpeg",
                "audio": "https://musica-api.onrender.com/audio/audio_12.mp3"
                }
            ]
        },
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