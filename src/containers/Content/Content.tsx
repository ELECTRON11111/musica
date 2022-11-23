import React, {useState} from "react";
import Search from "../../components/Search/Search";
import TopContent from "../../components/TopContent/TopContent";
import TopNav from "../../components/TopNav/TopNav";
import Modal from "../../components/UI/Modal/Modal";
import SideDrawer from "../../components/NavBar/SideDrawer/SideDrawer";
// The TopNav is for smaller displays

const Content = () => {
    const [isOpened, setIsOpened] = useState(false);

    const openedHandler = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div style={{
            width: "100vw"
        }}>
            <TopNav drawerClicked = {(e: any): any => openedHandler()}/>
            <SideDrawer open={isOpened} closed = {(e:any) => openedHandler()}/>
            <Search />
            <TopContent />
        </div>
    );
}

export default Content;
