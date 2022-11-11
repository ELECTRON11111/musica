import classes from "./MusicPlayer.module.css";
import MediaControls from "./MediaControls/MediaControls";
import SongInfo from "./SongInfo/SongInfo";
import VolumeControls from "./VolumeControls/VolumeControls";

const musicPlayer = () => {
    return (
        <div className={classes.MusicPlayer}>
            <SongInfo />
            <MediaControls />
            <VolumeControls />
        </div>
    );
}

export default musicPlayer;