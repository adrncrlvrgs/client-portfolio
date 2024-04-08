import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Work from "../components/Work";

const Layout = () => {

    
    return (
        <div className="">
            <section className="flex  items-center " style={{flexDirection: 'column'}}><Navbar/></section>
            <Work/>
            {/* <main id="layout" className="flex flex-1 absolute" style={{
                height: '100%',
                width: '100%',
                zIndex: -1,
               
                // overflow: 'hidden'
                
            }}>
                <Work/>
            </main> */}
        </div>
    );
};





export default Layout;
