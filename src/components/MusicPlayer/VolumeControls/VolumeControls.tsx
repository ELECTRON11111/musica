import react from "react";
import VolumeIcon from "../../../assets/musicPlayer/volume-high.svg";
import classes from "./VolumeControls.module.css";

const VolumeControls = (props: {volumeChange: Function, volumeRef: any, progressRef: any}) => {
    let isDown = false;
    return (
        <div className={classes.Container}>
            <img src={VolumeIcon} alt={"volume"} draggable={false}/>
            <div 
                className={classes.volume} 
                style={{
                    position: "relative", 
                    top:"2.8rem", 
                    flexShrink: "1.3"
                }}
                title = "volume - click and drag"
                ref = {props.volumeRef}
                onMouseDown = {(e: React.MouseEvent) => {
                    isDown = true;
                    props.volumeChange(e);
                }}
                onMouseUp = {() => isDown = false}
                onMouseLeave = {() => isDown = false}
                onMouseMove = {(e: React.MouseEvent) => isDown && props.volumeChange(e)}
            >
                <div className={classes.volume_progress} ref = {props.progressRef}></div>
            </div>
        </div>
    );
}

export default VolumeControls;