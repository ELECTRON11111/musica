import { useState, useEffect, useRef, useContext } from "react";
import SongsContext from "../../../SongsContext/SongsContext";
import classes from "./MediaControls.module.css";
import shuffle from "../../../assets/musicPlayer/shuffle.svg";
import previous from "../../../assets/musicPlayer/previous.svg";
import playBtn from "../../../assets/musicPlayer/play-btn.svg";
import next from "../../../assets/musicPlayer/next.svg";
import repeatOne from "../../../assets/musicPlayer/repeat-one.svg";

type propType = {
    progressBarRef: any
    progressRef: any,
    audio: any
}

const MediaControls = (props: propType) => {
    const [audioState, setAudioState] = useState(props.audio);
    const {data, setData} = useContext<any>(SongsContext);

    const progressRef = useRef<HTMLDivElement>(null);

    const togglePlay = () => {
        console.log(props.audio.paused);
        if (!props.audio.error) {
            if (!props.audio.paused) {
                props.audio.pause();
            } else {
                props.audio.play();
            }
        } else {
            // reload the audio
            props.audio.load();
        }
        
    }

    return (
        <div className={classes.Container}>
            <div className={classes.controls}>
                <img src={shuffle} alt="shuffle" />
                <img src={previous} alt="previous" />
                <img src={playBtn} alt="playBtn" onClick = {() => togglePlay()} />
                <img src={next} alt="next" />
                <img src={repeatOne} alt="repeatOne" />
            </div>

            <div className={classes.progress_bar}
                ref = {props.progressBarRef}
            >
                <div className={classes.progress} ref = {progressRef}></div>
            </div>
        </div>
    )
}

export default MediaControls;