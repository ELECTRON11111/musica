import { useState, useRef, useContext, useEffect } from "react";
import SongsContext from "../../SongsContext/SongsContext";
import classes from "./MusicPlayer.module.css";
import MediaControls from "./MediaControls/MediaControls";
import SongInfo from "./SongInfo/SongInfo";
import VolumeControls from "./VolumeControls/VolumeControls";

type active_song = {
    artist: string
    audio: string
    cover: string
    duration: string
    id: string
    isPlaying: boolean;
    title: string; 
}

const musicPlayer = () => {
    // get data from our song Context
    // data = {id: songId, allSongs: allSongs}
    const {data, setData} = useContext<any>(SongsContext);
    
    const [activeSong, setActiveSong] = useState<active_song>({
        artist: "",
        audio: "",
        cover: "",
        duration: "",
        id: "",
        isPlaying: false,
        title: "" 
    });
    const [songsList, setSongsList] = useState(data.allSongs);
    // Refs for Volume controls
    const volumeRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    // Refs for MediaControls
    const progressBarRef = useRef<HTMLDivElement>(null);
    const mediaProgressRef = useRef<HTMLDivElement>(null);
    
    const audio = new Audio(activeSong.audio);

    useEffect(() => {
        audio.load()
        // Modify the songs list from data to have an isPlaying property
        const modifiedSongsList = data.allSongs.map((song: any) => {
            
            let modifiedSongObject = {
                ...song,
                isPlaying: data.id === song.id? true: false
            }

            return modifiedSongObject;
        });
        
        const activeSong = modifiedSongsList.find((song: {isPlaying: boolean}) => song.isPlaying);
        setActiveSong(activeSong);
        
        setSongsList(modifiedSongsList);
    }, [data]);

    useEffect(() => {
        // this useEffect does cleanup work, pauses the previous song when a new one is clicked.
        return () => {
            // Cancel any playing audio
            audio.currentTime = 0;
            audio.pause();
        }
    })
    
    
    const volumeChangedHandler = (e: React.MouseEvent) => {
        // Audio volume range 0 - 1
        if (volumeRef.current) {
            const coords = volumeRef.current.getBoundingClientRect();
            
            const value = (e.pageX - coords.left) / coords.width;

            // update volume.
            audio["volume"] = value < 0.05? 0: value;

            // update the UI
            const progress = progressRef.current as HTMLDivElement;
            progress.style.flexBasis = `${value * 100}%`;

        }   
    }


    return (
        <div className={classes.MusicPlayer}>
            <SongInfo 
                src = {activeSong.cover} 
                title = {activeSong.title} 
                artist = {activeSong.artist} 
            />
            <MediaControls 
                audio = {audio}
                progressBarRef = {progressBarRef}
                progressRef = {mediaProgressRef}
            />
            <VolumeControls 
                volumeRef = {volumeRef} 
                progressRef = {progressRef} 
                volumeChange = {(e: React.MouseEvent) => volumeChangedHandler(e)} 
            />
        </div>
    );
}

export default musicPlayer;