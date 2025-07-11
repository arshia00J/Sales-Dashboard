"use client";

import SlideBar from "@/app/layouts/SideBar";
import Navbar from "@/app/layouts/Navbar";
import Header from "@/app/layouts/Header";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (

            <div className="h-screen w-screen flex flex-row overflow-hidden">
            <SlideBar/>

            <div className="flex flex-col flex-1 h-auto bg-gray-100 pb-4" >
                <Navbar />
                <Header />
                <div className="flex-1 overflow-y-auto">
                {children}
                </div>
            </div>
            </div>

  );
}
