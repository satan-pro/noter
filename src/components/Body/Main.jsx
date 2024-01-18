import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Notes from "./Notes/Notes";

function Main()
{
    return (
        <main>
            <Sidebar />
            <Notes />
        </main>
    );
}

export default Main;