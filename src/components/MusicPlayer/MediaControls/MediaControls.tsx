import { useState, useEffect, useRef, useContext } from "react";
import SongsContext from "../../../SongsContext/SongsContext";
import classes from "./MediaControls.module.css";
import shuffleSrc from "../../../assets/musicPlayer/shuffle.svg";
import previous from "../../../assets/musicPlayer/previous.svg";
import playBtn from "../../../assets/musicPlayer/play-btn.svg";
import next from "../../../assets/musicPlayer/next.svg";
import repeatOne from "../../../assets/musicPlayer/repeat-one.svg";

type propType = {
    progressBarRef: any
    progressRef: any,
    audio: any,
    toggleAudio: Function,
    changeSong: Function
}

const MediaControls = (props: propType) => {
    const [audioState, setAudioState] = useState(props.audio);
    // const {data, setData} = useContext<any>(SongsContext);

    const progressRef = useRef<HTMLDivElement>(null);
    const repeatRef = useRef<HTMLImageElement>(null);
    const shuffleRef = useRef<HTMLImageElement>(null);

    let isShuffled = false;

    const repeat = () => {
        const repeatImgRef = repeatRef.current as HTMLImageElement;

        if (props.audio.loop) {
            props.audio.loop = false;
            // update UI
            repeatImgRef.style.borderTop = "0px";
        } else {
            props.audio.loop = true;
            // repeatImgRef.style. = "";
            repeatImgRef.style.borderTop = "5px solid #FACD66";
            repeatImgRef.style.borderRadius = "3px";
        }
    }

    const shuffle = () => {
        const shuffleImgRef = shuffleRef.current as HTMLImageElement;
        if (isShuffled) {
            shuffleImgRef.style.borderTop = "5px solid #FACD66";
            shuffleImgRef.style.borderRadius = "3px";
        } else {
            shuffleImgRef.style.borderTop = "0px";
        }
    }

    return (
        <div className={classes.Container}>
            <div className={classes.controls}>
                <img 
                    src={shuffleSrc} 
                    alt="shuffle" 
                    ref = {shuffleRef} 
                    onClick = {() => {
                        isShuffled = !isShuffled;
                        shuffle();
                    }}
                />

                <img src={previous} 
                    alt="previous" 
                    data-action = {"previous"} 
                    onClick = {(e) => props.changeSong(e)} 
                />
                <img src={playBtn} alt="playBtn" onClick = {() => props.toggleAudio()} />
                <img src={next} 
                    alt="next" 
                    data-action = {"next"} 
                    onClick = {(e) => props.changeSong(e)} 
                />
                <img src={repeatOne} alt="repeatOne" onClick = {() => repeat()} ref = {repeatRef}/>
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