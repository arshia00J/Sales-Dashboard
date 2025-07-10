"use client";

import SlideBar from "@/app/layouts/SideBar";
import Navbar from "@/app/layouts/Navbar";
import Header from "@/app/layouts/Header";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (

            <div className="h-screen w-screen bg-gray-50 flex flex-row overflow-hidden">
            <SlideBar/>

            <div className="flex flex-col flex-1 h-full">
                <Navbar />
                <Header />
                <div className="flex-1 overflow-y-auto">
                {children}
                </div>
            </div>
            </div>

  );
}
