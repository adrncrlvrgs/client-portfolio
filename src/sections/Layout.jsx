import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div class="w-full h-screen flex flex-col">
            <section class="flex  items-center " style={{flexDirection: 'column'}}><Navbar/></section>
            <main class="flex flex-1 overflow-y-auto absolute" style={{
                height: '100%',
                width: '100%',
                zIndex: -1
            }}>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;
