"use client";
import { useState } from "react";
import Image from "next/image";
export default function PaginationBar() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 13;

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col mt-6 text-sm gap-4">
      <div className="flex items-center gap-[3px]">
        <span className="text-[#1A71F6] font-bold">{currentPage}</span>
        <span className="text-[#737373] dark:text-[#B0B0B0]">- 10 of {totalPages} Pages</span>
      </div>


    <div className="flex justify-between">
      <div className="flex items-center gap-[13px]">
        <span className="text-[#454545] dark:text-[#B0B0B0]">The page on</span>
        <select
          value={currentPage}
          onChange={(e) => setCurrentPage(parseInt(e.target.value))}
          className="border border-[#B0B0B0] dark:text-[#B0B0B0] rounded-[8px] px-2 py-1 text-sm w-[50px]"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="cursor-pointer disabled:opacity-50"
        >
          <Image src={"Icon_right.png"} alt="left icon" width={32} height={28} className="rotate-180 dark:invert"/>
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="cursor-pointer disabled:opacity-50"
        >
          <Image src={"Icon_right.png"} alt="right icon" className="dark:invert" width={32} height={28}/>
        </button>
      </div>
    </div>
      



    </div>
  );
}
