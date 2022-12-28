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
    const volumeRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
    
    const audio = new Audio(activeSong.audio);
    
    const volumeChangedHandler = (e: React.MouseEvent) => {
        // Audio volume range 0 - 1
        if (volumeRef.current) {
            const coords = volumeRef.current.getBoundingClientRect();
            
            const value = (e.pageX - coords.left) / coords.width;
            console.log(value);

            // update volume.
            audio["volume"] = value < 0.05? 0.05: value;

            console.log(audio.volume);
            
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
            <MediaControls />
            <VolumeControls 
                volumeRef = {volumeRef} 
                progressRef = {progressRef} 
                volumeChange = {(e: React.MouseEvent) => volumeChangedHandler(e)} 
            />
        </div>
    );
}

export default musicPlayer;