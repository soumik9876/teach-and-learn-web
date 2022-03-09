import React from "react";
import TopBar from "../topbar/topbar";

const AppLayout: React.FC = ({children}) => {
    return <>
        <TopBar/>
        {children}
    </>;
};

export default AppLayout;
