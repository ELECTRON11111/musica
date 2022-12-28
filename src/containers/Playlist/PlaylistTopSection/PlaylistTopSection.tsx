import { useContext } from "react";
import SongsContext from "../../../SongsContext/SongsContext";
import classes from "./PlaylistTopSection.module.css";
import heart from "../../../assets/playlist/love.png";
import play from "../../../assets/playlist/play-all.png";
import AddToCollectionBtn from "../../../assets/playlist/music-square-add.png";
import LeadImg from "../../../assets/playlist/Lead-image.png";

// For Playlist.
interface propType {
    cover: string;
    title: string;
    info: string;
    length: string;
    addToCollectionsClicked: any;
    likeBtnClicked: any;
    firstSongId: any;
    files: Array<object>
}

function PlaylistTopSection(props: propType) { 
    const {data, setData} = useContext<any>(SongsContext);

    return (
        <div className= {classes.TopSection}>
            <img src = {props.cover} className={classes.Lead} />
            
            <div className = {classes.Top_Text_Btns}>
                <div className = {classes.Text}>
                    <h3>{props.title}</h3>
                    <p>{props.info}</p>
                    <p>{props.length}</p>
                </div>

                <div className = {classes.Btns}>
                    <div className = {classes.Play}>
                        <img src={play} alt="playBtn" />
                        <p
                            onClick = {() => {
                                setData({id: props.firstSongId, allSongs: props.files});
                            }}
                        >
                            Play all
                        </p>
                    </div>
                    <div className = {classes.Add_to_Collection} >
                        <img src={AddToCollectionBtn} alt="playBtn" />
                        <p 
                            onClick = {(e: React.MouseEvent) => props.addToCollectionsClicked(e)}
                        >
                            Add to collection
                        </p>
                    </div>
                    <div className = {classes.heart}>
                        <img src={heart} onClick = {(e: React.MouseEvent) => props.likeBtnClicked(e)} />
                        <p
                            onClick = {(e: React.MouseEvent) => props.likeBtnClicked(e)}
                        >
                            Like
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

PlaylistTopSection.defaultProps = {
    cover: LeadImg,
    title: "Tomorrow's tunes",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    length: "56 songs - 16 hrs+"
}


export default PlaylistTopSection;