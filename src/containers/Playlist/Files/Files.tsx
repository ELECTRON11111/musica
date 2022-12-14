import React, { useContext } from "react";
import SongsContext from "../../../SongsContext/SongsContext";
import classes from "./Files.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import heart from "../../../assets/playlist/heart-grey.svg";
import options from "../../../assets/playlist/options.svg";
import playlistImg from "../../../assets/playlist/playlist-items/Rectangle 1.png";
interface filePropTypes {
    cover: string;
    title: string;
    artist: string;
    duration: string;
    id: string;
    playlistName: string;
    files: Array<object>;
}

function Files(props: any) {
    const DOM = (
        <React.Fragment>
            {props.files.map((file: any) => {
                return <File 
                    cover = {file.cover}
                    title = {file.title}
                    artist = {file.artist}
                    duration = {file.duration}
                    id = {file.id}
                    key = {file.id}
                    playlistName = {props.playlistName}
                    files = {props.files}
                />
            })}
        </React.Fragment>
    );

    return (
        <div className={classes.Container}>
            {props.files.length == 0? <Spinner />: DOM}
        </div>
    );
}

const File = (props: filePropTypes) => {
    const {data, setData} = useContext<any>(SongsContext);

    const songClickedHandler = () => {
        setData({id: props.id, allSongs: props.files});
    }

    return (
        <div className={classes.File_Container}>
            <div className={classes.Cover_Heart}>
                <img src={props.cover} className={classes.Cover} alt="coverImg" />
                <img src={heart} className={classes.Heart} alt="heart" />
            </div>

            <p className={classes.Title} onClick={() => songClickedHandler()}>{props.title} ~ {props.artist}</p>
            <p className={classes.Id}>{props.playlistName}</p>
            <p className={classes.Duration}>{props.duration}</p>

            <img src={options} alt="options" className={classes.Options} />
        </div>
    )
}

File.defaultProps = {
    cover: playlistImg,
    title: "Let me love you",
    artist: "Krisx",
    duration: "3:27",
    id: "ybnl-1"
}

export default Files;