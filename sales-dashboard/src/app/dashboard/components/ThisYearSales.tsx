"use client";

import Image from "next/image";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";


const data = [
  { name: "Jan", saleValue: 120000000, itemPersale: 130000000 },
  { name: "Feb", saleValue: 150000000, itemPersale: 140000000 },
  { name: "Mar", saleValue: 130000000, itemPersale: 160000000 },
  { name: "Apr", saleValue: 170000000, itemPersale: 200000000 },
  { name: "May", saleValue: 110000000, itemPersale: 190000000 },
  { name: "Jun", saleValue: 250000000, itemPersale: 160000000 },
  { name: "Jul", saleValue: 200000000, itemPersale: 120000000 },
  { name: "Aug", saleValue: 150000000, itemPersale: 230000000 },
  { name: "Sep", saleValue: 120000000, itemPersale: 250000000 },
  { name: "Oct", saleValue: 240000000, itemPersale: 230000000 },
  { name: "Nov", saleValue: 250000000, itemPersale: 260000000 },
  { name: "Des", saleValue: 230000000, itemPersale: 200000000 },
];


export default function ThisYearSales() {
  return (
    <div className="bg-white dark:bg-[#1A1A1B] border border-[#E7E7E7] dark:border-[#3D3D3D] rounded-[24px] p-4 w-full xl:h-[382px]">
      
      {/* Top Title + Action */}
      <div className="flex items-center justify-between mb-4">
      <h3 className="text-[#454545] dark:text-[#F6F6F6] text-[16px] font-semibold leading-[130%]">
          Your Sales this year
        </h3>

        <div className="flex items-center gap-1 cursor-pointer">
          <p className="text-[12px] text-[#3D3D3D] dark:text-[#F6F6F6] font-semibold leading-[140%]">
            Show All
          </p>
          <Image
            src={"/arrow-up-right.png"}
            alt="arrow"
            width={24}
            height={24}
            className="flex-shrink-0 dark:invert"
          />
        </div>
      </div>

      {/* Indicators */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-[14px] h-[14px] bg-[#BCF328]"></div>
        <p className="text-[#737373] dark:text-[#B0B0B0] text-[12px]">Average Sale Value</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-[14px] h-[14px] bg-[#1A71F6]"></div>
        <p className="text-[#737373] dark:text-[#B0B0B0] text-[12px]">Average item persale</p>
      </div>

      
      {/* Chart */}
      <ResponsiveContainer width="100%" height={230}>
        <LineChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }}  />
          <YAxis hide />
          <Tooltip formatter={(val) => `$${val.toLocaleString()}`} />
          <ReferenceLine x="Jul" stroke="#1A71F6" strokeWidth={2} />
          <Line
            type="monotone"
            dataKey="saleValue"
            stroke="#BCF328"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="itemPersale"
            stroke="#1A71F6"
            strokeWidth={3}
            strokeDasharray="6 6"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      
    </div>
  );
}
