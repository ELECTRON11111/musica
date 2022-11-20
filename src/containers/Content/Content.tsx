import React from "react";
import Search from "../../components/Search/Search";
import TopContent from "../../components/TopContent/TopContent";
import TopNav from "../../components/TopNav/TopNav";

// The TopNav is for smaller displays

const Content = () => {
    return (
        <div style={{
            width: "100vw"
        }}>
            <TopNav />
            <Search />
            <TopContent />
        </div>
    );
}

export default Content;
