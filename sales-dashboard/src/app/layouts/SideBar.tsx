"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const [isProductOpen, setIsProductOpen] = useState(false);
  return (
    <div className="hidden xl:flex xl:overflow-y-auto w-[280px] h-screen px-[16px] pt-[32px] bg-white dark:bg-[#1A1A1B] flex-col items-center gap-[45px]">
      <div className="w-full">
        <div className="flex flex-row w-full items-center justify-between mb-[45px]">
          <Image
            src={"/simages/Logo.png"}
            alt="logo-culters"
            width={120}
            height={31}
            className="pl-2 dark:invert"
          />
          <Image
            src={"/simages/Panel-close.png"}
            alt="panel close"
            width={24}
            height={24}
            className="dark:invert"
          />
        </div>

        <div className="flex flex-row rounded-xl border border-[#E7E7E7] dark:border-[#737373] p-2 w-full mb-6">
          <Image
            src={"/simages/company-logo.png"}
            alt="company logo"
            width={40}
            height={40}
          />
          <div className="flex flex-col ml-2">
            <span className="text-[12px] text-[#B0B0B0] dark:text-[#D1D1D1]">Company</span>
            <p className="text-[14px] text-[#454545] dark:text-[#F6F6F6] font-bold">Kanky Store</p>
          </div>
        </div>

        <div>
          <h3 className="text-[12px] text-[#888888] dark:text-[#737373] mb-2">GENERAL</h3>

          <Link href={"/dashboard"}>
            <div className={pathname == "/dashboard" ? "cursor-pointer flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] dark:text-[#454545] mb-1" : "cursor-pointer flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]"}>
              <Image src={"/simages/home-2.png"} alt="dashboard" width={24} height={24} className="dark:invert" />
              <p>Dashboard</p>
            </div>
          </Link>


          <div
            className={pathname.startsWith("/product") ? "cursor-pointer flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] mb-1 relative dark:text-[#454545]" : "cursor-pointer relative flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]"}
            onClick={() => setIsProductOpen(!isProductOpen)}
          >
            <Image src={"/simages/store.png"} alt="product" width={24} height={24} className="dark:invert"/>
            <p className="flex-grow">Product (119)</p>
            <Image
              src={"/simages/arrow-up-simple.png"}
              alt="arrow"
              width={24}
              height={24}
              className={`absolute right-2 top-2 transition-transform ${
                isProductOpen ? "rotate-0" : "rotate-180"
              } dark:invert`}
            />
          </div>

          {isProductOpen && (
            <div className="p-2 ml-2 flex flex-col gap-4 text-[#888888] justify-center text-[14px]">
              <Link href={"/product/sneakers"}><p className={pathname == "/product/sneakers" ? "text-[#1A71F6] font-bold" : ""}>Sneakers</p></Link>
              <p>Jacket</p>
              <p>T-Shirt</p>
              <p>Bag</p>
            </div>
          )}

          <div className={pathname == "/transaction" ? "cursor-pointer flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] mb-1 dark:text-[#454545]" : "cursor-pointer flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]"}>
            <Image src={"/simages/note-01.png"} alt="transaction" width={24} height={24} className="dark:invert" />
            <p>Transaction (441)</p>
          </div>

          <div className={pathname == "/customers" ? "cursor-pointer flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] mb-1 dark:text-[#454545]" : "cursor-pointer flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]"}>
            <Image src={"/simages/user-group.png"} alt="customers" width={24} height={24} className="dark:invert"/>
            <p>Customers</p>
          </div>

          <div className={pathname == "/salesreport" ? "cursor-pointer flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] mb-1 dark:text-[#454545]" : "cursor-pointer flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]"}>
            <Image src={"/simages/line-chart.png"} alt="sales" width={24} height={24} className="dark:invert"/>
            <p>Sales Report</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-[12px] text-[#888888] mb-2">TOOLS</h3>

          <div className={pathname == "/settings" ? "cursor-pointer flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] mb-1 dark:text-[#454545]" : "cursor-pointer flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]"}>
            <Image src={"/simages/settings.png"} alt="settings" width={24} height={24} className="dark:invert"/>
            <p>Account & Settings</p>
          </div>

          <div className={pathname == "/help" ? "cursor-pointer flex items-center gap-2 p-2 rounded-xl bg-[#D9EDFF] text-[14px] font-bold text-[#454545] mb-1 dark:text-[#454545]" : "cursor-pointer flex items-center gap-2 p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]"}>
            <Image src={"/simages/help.png"} alt="help" width={24} height={24} className="dark:invert"/>
            <p>Help</p>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl text-[14px] text-[#888888] dark:text-[#B0B0B0]">
            <div className="flex items-center gap-2">
              <Image src={"/simages/moon.png"} alt="dark" width={24} height={24} className="dark:invert"/>
              <p>Dark Mode</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-[#3D3D3D] peer-focus:outline-none rounded-full peer relative">
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

      <div className="w-full flex items-center gap-2 border border-[#E7E7E7] dark:border-[#737373] rounded-xl p-2 mb-4">
        <Image
          src={"/simages/admin-profile.png"}
          alt="profile"
          width={40}
          height={40}
        />
        <div className="flex flex-col flex-grow">
          <p className="text-[14px] text-[#454545] dark:text-[#F6F6F6] font-bold">Guy Hawkins</p>
          <p className="text-[12px] text-[#B0B0B0]">Admin</p>
        </div>
        <Image src={"/simages/arrow-up-simple.png"} alt="dropdown" className="rotate-180" width={24} height={24} />
      </div>
    </div>
  );
}
