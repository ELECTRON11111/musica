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
    
    // for playBtn
    const playBtnRef = useRef<HTMLDivElement>(null);

    
    const audio = new Audio(activeSong.audio);

    let interval: any;

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

    useEffect(() => {
        // Every time there's a new active song, start to play.
        // Use previous volume
        const progress = progressRef.current as HTMLDivElement;
        const flexBasis = progress.style.flexBasis; // e.g 24%
        // When page loads for the first time, the flexBasis is returned as "", so
        // we have to make provisions for that
        const volume = flexBasis == ""? 0.5 : (parseInt(flexBasis.split("%")[0]) / 100);
        
        audio["volume"] = volume;
        audio.play().catch((err) => {});
        // change text content of the playBtn
        const playBtn = playBtnRef.current as HTMLDivElement;
        playBtn.textContent = audio.paused? "►" :"❚❚";

        // deal with progress
        // prevent setting the interval in the first render
        // Since first song is Rush
        // activeSong.title !== "Rush"? interval = setInterval(progressHandler, 1000): null;
        interval = setInterval(progressHandler, 1000)
    }, [activeSong]);

    useEffect(() => {
        // this useEffect does cleanup work, pauses the previous song when a new one is clicked.
        return () => {
            // Cancel any playing audio
            audio.currentTime = 0;
            audio.pause();

            // clear the interval for progressHandler
            clearInterval(interval);
        }
    }, [activeSong]);

    // useEffect(() => clearInterval(interval), []);
    
    
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

    const togglePlay = () => {
        clearInterval(interval);
        const playBtn = playBtnRef.current as HTMLDivElement;
        if (!audio.error) {
            if (!audio.paused) {
                // stop the timeUpdate
                clearInterval(interval);
                audio.pause();
                
                // change text content of the playBtn
                playBtn.textContent = "►";
            } else {
                // restart the timeUpdate
                interval = setInterval(progressHandler, 1000);
                audio.play();

                // change text content of the playBtn
                playBtn.textContent = "❚❚";
            }
        } else {
            // reload the audio
            audio.load();
        }
        
    }

    const songChangedHandler = (e: React.MouseEvent) => {

        const target = e.target as HTMLImageElement;
        
        // find its index
        const activeSongIndex = [...songsList].findIndex((song) => activeSong.id === song.id);
        // Ensure STATE IMMUTABILITY, i.e do not change the state in any form without setState.
        // Remember array, objects are reference types so without making a clone of the state
        // ... whatever change we make to its reference would affect the state too.
        const currentActiveSong = {...activeSong, index: activeSongIndex};

        // change the "isPlaying" to false
        currentActiveSong.isPlaying = false;

        setActiveSong(currentActiveSong);

        const isNext = target.dataset.action === "next";
        let nextSongIndex = currentActiveSong.index + (isNext? 1: -1);
        // if nextSongIndex is < 0 or if it is > songsList length, we shoud display 0 
        // i.e the song should start over. else just use the value
        nextSongIndex = nextSongIndex < 0 || nextSongIndex > songsList.length - 1 ? 0: nextSongIndex;

        const nextSong = [...songsList][nextSongIndex];
        // console.log(nextSong);
        
        // change its "isPlaying" to true
        nextSong.isPlaying = true;
        // save as new activeSong
        setActiveSong(nextSong);

        // console.log(activeSong);
    }

    const progressHandler = () => {
        console.log("happende")
        const progress = mediaProgressRef.current as HTMLDivElement;
        if (progress) {
            if (audio.ended) {
                // change currentTime to 0
                audio.currentTime = 0;
            } 
            
            const timePosition = (audio.currentTime / audio.duration) * 100;
            progress.style.flexBasis = `${timePosition}%`;            
        }
    }

    const progressClickedHandler = (e: React.MouseEvent) => {
        const progressBar = progressBarRef.current as HTMLDivElement;
        if (mediaProgressRef) {
            const progress = mediaProgressRef.current as HTMLDivElement;
            const coords = progressBar.getBoundingClientRect();
            
            const value = (e.pageX - coords.left) / coords.width;
            // update current time
            audio.currentTime = value * audio.duration;

            // use percent to update flexBasis of progressBar
            const percent = `${(value * 100)}%`;
            progress.style.flexBasis = percent;    

            audio.play();
            // change text content of the playBtn
            const playBtn = playBtnRef.current as HTMLDivElement;
            playBtn.textContent = "❚❚";
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
                playRef = {playBtnRef}
                toggleAudio = {() => togglePlay()}
                progressBarClicked = {(e: React.MouseEvent) => progressClickedHandler(e)}
                changeSong = {(e: React.MouseEvent) => songChangedHandler(e)}
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