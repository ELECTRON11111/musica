import classes from "./MediaControls.module.css";
import shuffle from "../../../assets/musicPlayer/shuffle.svg";
import previous from "../../../assets/musicPlayer/previous.svg";
import playBtn from "../../../assets/musicPlayer/play-btn.svg";
import next from "../../../assets/musicPlayer/next.svg";
import repeatOne from "../../../assets/musicPlayer/repeat-one.svg";

const MediaControls = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.controls}>
                <img src={shuffle} alt="shuffle" />
                <img src={previous} alt="previous" />
                <img src={playBtn} alt="playBtn" />
                <img src={next} alt="next" />
                <img src={repeatOne} alt="repeatOne" />
            </div>

            <div className={classes.progress_bar}>
                <div className={classes.progress}></div>
            </div>
        </div>
    )
}

export default MediaControls;