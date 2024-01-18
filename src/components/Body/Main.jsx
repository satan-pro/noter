import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Notes from "./Notes/Notes";
import Extras from "./Extras/Extras";

function Main()
{
    return (
        <main>
            <Sidebar />
            <Notes />
            <Extras />
        </main>
    );
}

export default Main;