import React from "react";
import { Link } from "react-router-dom";

export default function Navbar (){
    return(
                <div style={{
                    
                }}>
                    <div className=" container py-3 px-5 mx-auto rounded-full mt-3" style={{
                        backgroundColor: 'rgba(30, 30, 30)',
                        border:'1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}>
                        <div className="flex items-center justify-center text-gray-600 capitalize dark:text-gray-300 z-20 " >

                            <Link to="/" className="text-gray-800 dark:text-gray-200 border-blue-500 mx-1.5 sm:mx-6">Home</Link>
                            <Link to="/works" className="text-gray-800 dark:text-gray-200  mx-1.5 sm:mx-6">Works</Link>
                            <Link to="#" className="text-gray-800 dark:text-gray-200   mx-1.5 sm:mx-6">About</Link>
                            <Link to="#" className="text-gray-800 dark:text-gray-200  mx-1.5 sm:mx-6">Contact Me</Link>
                        </div>  
                    </div>
                </div> 

    )

}