"use client";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [isProductOpen, setIsProductOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="hidden xl:flex w-[280px] h-screen px-[16px] pt-[32px] bg-white flex-col items-center gap-[45px]">
      <div className="w-full">
        <div className="flex flex-row w-full h-[31px] gap-[88px] mb-[45px]">
          <Image
            src={"/images/Logo.png"}
            alt="logo-culters"
            width={120}
            height={31}
            className="pl-2"
          />
          <Image
            src={"/images/Panel-close.png"}
            alt="panel close"
            width={24}
            height={24}
          />
        </div>

        <div className="flex flex-row rounded-xl border border-[#E7E7E7] p-2 w-full mb-6">
          <Image
            src={"/images/company-logo.png"}
            alt="company logo"
            width={40}
            height={40}
          />
          <div className="flex flex-col ml-2">
            <span className="text-[12px] text-[#B0B0B0]">Company</span>
            <p className="text-[14px] text-[#454545] font-bold">Kanky Store</p>
          </div>
        </div>

        <div>
          <h3 className="text-[12px] text-[#888888] mb-2">GENERAL</h3>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] mb-1">
            <Image src="/images/home-2.png" alt="dashboard" width={24} height={24} />
            <p>Dashboard</p>
          </div>

          <div
            className="flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] cursor-pointer relative"
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            <Image src="/images/store.png" alt="product" width={24} height={24} />
            <p className="flex-grow">Product (119)</p>
            <Image
              src="/images/arrow-up-simple.png"
              alt="arrow"
              width={24}
              height={24}
              className={`absolute right-2 top-2 transition-transform ${
                isProductOpen ? "rotate-0" : "rotate-180"
              }`}
            />
          </div>

          {isProductOpen && (
            <div className="p-2 ml-2 flex flex-col gap-4 text-[#888888] justify-center text-[14px]">
              <p>Sneakers</p>
              <p>Jacket</p>
              <p>T-Shirt</p>
              <p>Bag</p>
            </div>
          )}

          <div className="flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888]">
            <Image src="/images/note-01.png" alt="transaction" width={24} height={24} />
            <p>Transaction (441)</p>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888]">
            <Image src="/images/user-group.png" alt="customers" width={24} height={24} />
            <p>Customers</p>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888]">
            <Image src="/images/line-chart.png" alt="sales" width={24} height={24} />
            <p>Sales Report</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-[12px] text-[#888888] mb-2">TOOLS</h3>

          <div className="flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888]">
            <Image src="/images/settings.png" alt="settings" width={24} height={24} />
            <p>Account & Settings</p>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888]">
            <Image src="/images/help.png" alt="help" width={24} height={24} />
            <p>Help</p>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl text-[14px] text-[#888888]">
            <div className="flex items-center gap-2">
              <Image src="/images/moon.png" alt="dark" width={24} height={24} />
              <p>Dark Mode</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-400 relative">
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    isDarkMode ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 border border-[#E7E7E7] rounded-xl p-2 mb-4">
        <Image
          src="/images/admin-profile.png"
          alt="profile"
          width={40}
          height={40}
        />
        <div className="flex flex-col flex-grow">
          <p className="text-[14px] text-[#454545] font-bold">Guy Hawkins</p>
          <p className="text-[12px] text-[#B0B0B0]">Admin</p>
        </div>
        <Image src="/images/arrow-up-simple.png" alt="dropdown" className="rotate-180" width={24} height={24} />
      </div>
    </div>
  );
}
