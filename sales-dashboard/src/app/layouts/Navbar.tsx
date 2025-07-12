import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full hidden xl:flex justify-between items-center px-6 py-3 border-b-[2px] border-[#E7E7E7] dark:border-[#3D3D3D] bg-white dark:bg-[#1A1A1B]">
      {/* Search box */}
      <div className="relative w-[300px]">
        <input
          type="text"
          placeholder="Search product"
            className="w-full pl-4 pr-11 py-[9.5px] border border-[#B0B0B0] dark:border-[#D1D1D1] rounded-[12px] text-sm text-[#949494] focus:outline-none focus:ring-2 focus:ring-blue-300 "
        />
        <Image
          src={"/search.png"}
          alt="search"
          width={24}
          height={24}
          className="absolute right-[6px] top-2 dark:invert"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Mail icon with badge */}
        <div className="relative p-2 dark:bg-[#3D3D3D] bg-[#F6F6F6] rounded-[9px]">
          <Image
            src={"/mail.png"}
            alt="mail"
            width={20}
            height={20}
            className="dark:invert"
          />
          <span className="absolute -top-1 -right-1 bg-[#EC4747] dark:text-black text-white text-[8px] font-semibold w-[13px] h-[12px] rounded-[2px] flex items-center justify-center">
            2
          </span>
        </div>

        {/* Notification icon with badge */}
        <div className="relative p-2 bg-[#F6F6F6] dark:bg-[#3D3D3D] rounded-[9px]">
          <Image
            src={"/notifications.png"}
            alt="notifications"
            width={20}
            height={20}
            className="dark:invert"
          />
          <span className="absolute -top-1 -right-1 bg-[#EC4747] dark:text-black text-white text-[8px] font-semibold w-[13px] h-[12px] rounded-[2px] flex items-center justify-center">
            8
          </span>
        </div>

        <div className="w-px h-[34px] bg-[#C9C9C9]" />

        {/* User Info */}
        <div className="flex items-center gap-2 relative">
          <Image
            src={"/admin-profile.png"}
            alt="profile"
            width={40}
            height={36}
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-800 dark:text-[#F6F6F6]">Guy Hawkins</p>
            <p className="text-xs text-gray-400">Admin</p>
            
          </div>
          <span className="w-[11px] h-[11px] bg-[#28B652] rounded-full absolute left-8 top-8" />
        </div>
      </div>
    </div>
  );
}
