import React, {useState, useEffect} from "react";
import {useParams, useLocation} from "react-router-dom";
import axios from "axios";
import Search from "../../components/Search/Search";
import PlaylistTopSection from "./PlaylistTopSection/PlaylistTopSection";
import Files from "./Files/Files";

import classes from "./Playlist.module.css";

function Playlist(props: any) {
    const [data, setData] = useState({
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
            }
        ]
    });

    const [specificPlaylist, setSpecificPlaylist] = useState({id: "random"});
    
    // this would be used to get the data for this specific playlist
    // params.id would give us the id of the playlist we're to fetch
    let params = useParams();
    // let location = useLocation();

    useEffect(() => {

        // Get data for playlist
        axios.get(`https://musica-api.onrender.com/playlist/`)
            .then(res => {
                console.log(res.data);
                // use the params id to get the specific playlist
                const specificPlaylist = res.data.find((playlist: any) => {
                    if (playlist.id == params.id) {
                        setSpecificPlaylist(playlist);
                        return playlist;
                    }
                })

                console.log(specificPlaylist);
                setData(specificPlaylist);
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    
    const addToCollectionsHandler = () => {

        const stuff = localStorage.getItem("items");
        
        // Again typescript does not understand the type ... It expects a string but isn't sure that the getItem would be type safe. So we give it another option with the type it expects
        // If there is a localStorage data available for "likedPlaylists"
        if(stuff !== null) {
            
            const LSCollectionsData = JSON.parse(localStorage.getItem("items") || ""); // an array
            
            
            // Check if this playlist has been added before
            const isPlaylistStored = LSCollectionsData.find((playlist: any) => playlist.id == specificPlaylist.id)? true: false;
            
            if (!isPlaylistStored) {
                LSCollectionsData.push(specificPlaylist);
                
                // push updated data to localStorage
                localStorage.setItem("items", JSON.stringify(LSCollectionsData));

                alert("The playlist was successfully added! They're in your likes/collections");
            } else {
                alert("The playlist is already stored!");
            }

        } else {
            
            // push updated data to localStorage
            localStorage.setItem("items", JSON.stringify([specificPlaylist]));
        }

    }

    const addToLikedPlaylists = () => {
        const stuff = localStorage.getItem("likedPlaylists");

        // If there is a localStorage data available for "likedPlaylists"
        if(stuff !== null) {
            const LSLikedPlaylistData = JSON.parse(localStorage.getItem("likedPlaylists") || ""); // an array

            // Check isplaylistLiked.
            const isPlaylistLiked = LSLikedPlaylistData.find((playlist: any) => playlist.id == specificPlaylist.id)? true: false;

            if(!isPlaylistLiked) {

                LSLikedPlaylistData.push(specificPlaylist);
                // push updated data to localStorage
                localStorage.setItem("likedPlaylists", JSON.stringify(LSLikedPlaylistData));

                alert("The playlist was successfully added! They're in your likes/collections");
            } else {
                alert("The playlist is already stored!");
            }
            
        } else {
            // Create the localStorage for "likedPlaylists", then put the selected playlist as an initial value
            localStorage.setItem("likedPlaylists", JSON.stringify([specificPlaylist]));
        }

    }


    // Change background to the image of whatever playlist selected 
    // document.documentElement.style.setProperty(`--bg`, `url(${data[0].cover}) 120% no-repeat `);
    // document.documentElement.style.setProperty(`--bg`, `linear-gradient(0deg, rgba(10, 10, 10, 0.6), rgba(0, 0, 0, 0.6)), url(${data[0].cover}) 250%`);
    // document.body.style.setProperty("box-shadow", "0px 0px 11px rgba(250, 205, 102, 0.25)")

    return (
        <div className={classes.Container}>
            <Search isIcon = {false} />
            <PlaylistTopSection 
                // We're using [""] to pick properties because Typescript has issues interpreting the normal .property style
                // Due to the fact we updated the default state with useEffect.
                title = {data["title"]}
                info = {data["info"]}
                length = {`${data["files"]["length"]} songs - 16 hrs+`}
                cover = {data["cover"]}
                addToCollectionsClicked = {() => addToCollectionsHandler()}
                likeBtnClicked = {() => addToLikedPlaylists()}
            />
            <Files files={data["files"]} playlistName={data["title"]} />
        </div>
    )
}

export default Playlist;