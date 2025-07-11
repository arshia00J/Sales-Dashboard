"use client";

import SlideBar from "@/app/layouts/SideBar";
import Navbar from "@/app/layouts/Navbar";
import Header from "@/app/layouts/Header";
import { useState } from "react";


export default function ClientLayout({ children }: { children: React.ReactNode }) {

    const [isDarkMode, setIsDarkMode] = useState(false);

  return (

            <div className={`h-screen w-screen flex flex-row overflow-hidden ${isDarkMode ? "dark" : ""}`}>
            <SlideBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>

            <div className="flex flex-col flex-1 h-auto bg-gray-100 dark:bg-[#101011]" >
                <Navbar />
                <Header />
                <div className="flex-1 overflow-y-auto">
                {children}
                </div>
            </div>
            </div>

  );
}
