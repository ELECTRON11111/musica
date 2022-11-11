import react from "react";
import VolumeIcon from "../../../assets/musicPlayer/volume-high.svg";
import classes from "./VolumeControls.module.css";

const VolumeControls = () => {
    return (
        <div className={classes.Container}>
            <img src={VolumeIcon} alt={"volume"}/>
            <div className={classes.volume} style={{
                position: "relative", top:"2.375rem", flexShrink: "1.3"
            }}>
                <div className={classes.volume_progress}></div>
            </div>
        </div>
    );
}

export default VolumeControls;