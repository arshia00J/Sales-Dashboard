import Image from "next/image";

export default function Home() {
  return (
    <div className="flex xl:hidden items-center justify-between px-5 py-4 bg-white dark:bg-[#1A1A1B]">
      
      {/* Profile */}
      <div className="flex items-center gap-4 relative">
        <Image
          src="/images/admin-profile.png"
          alt="admin profile"
          width={40}
          height={40}
        />
        
        {/* Online Status */}
        <span className="absolute left-8 bottom-0 w-3 h-3 bg-[#28B652] rounded-full"></span>

        <div className="flex flex-col">
          <p className="text-[#2A2A2A] dark:text-[#F6F6F6] font-bold text-[16px] leading-[110%]">Guy Hawkins</p>
          <p className="text-[#727272] font-normal text-[12px] leading-[150%]">Admin</p>
        </div>
      </div>

      {/* Search & Menu Icons */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/search.png"
          alt="search"
          width={24}
          height={24}
          className="dark:invert"
        />
        <Image
          src="/images/menu.png"
          alt="menu"
          width={24}
          height={24}
          className="dark:invert"
        />
      </div>

    </div>
  );
}
