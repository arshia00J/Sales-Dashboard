"use client";
import Image from "next/image";
import { useState } from "react";

const sampleProducts = [
  {
    id: "021231",
    name: "Story Honzo (Black)",
    price: "$32,032",
    size: 40,
    qty: 3000,
    date: "04/17/23 at 8:25 PM",
    status: "Available",
    img: "/images/Produk.png",
  },
  {
    id: "021232",
    name: "Story Honzo (Black)",
    price: "$32,032",
    size: 40,
    qty: 3000,
    date: "04/17/23 at 8:25 PM",
    status: "Available",
    img: "/images/Produk.png",
  },
  {
    id: "021233",
    name: "Story Honzo (Black)",
    price: "$32,032",
    size: 40,
    qty: 3000,
    date: "04/17/23 at 8:25 PM",
    status: "Available",
    img: "/images/Produk.png",
  },
  {
    id: "021234",
    name: "Story Honzo (Black)",
    price: "$32,032",
    size: 40,
    qty: 3000,
    date: "04/17/23 at 8:25 PM",
    status: "Available",
    img: "/images/Produk.png",
  },

];

export default function ProductTable() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-[#E7E7E7]">
      <div className="bg-[#F6F6F6] px-4 py-[14.5px] text-[12px] font-bold border-b border-[#E7E7E7]">
        Product
      </div>

      {sampleProducts.map((item, index) => (
        <div key={index} className="border-b last:border-none border-[#E7E7E7] px-3 py-4 ">
          <div className="flex gap-3 cursor-pointer" onClick={() => toggleItem(index)}>
            <input type="checkbox" className="w-[16.8px] h-[16.8px] border-[#454545] m-[3.6px] cursor-pointer" />
            <Image src={item.img} alt={item.name} width={42} height={42} />
            <div className="flex-1 gap-1 flex flex-col">
              <p className="text-[#1A71F6] text-[12px] font-normal">{item.id}</p>
              <p className="text-sm text-[#454545] font-normal">{item.name}</p>
            </div>
            <button>
              <Image
                src={"/images/icon_arrow.png"}
                alt="arrow"
                width={32}
                height={28}
                className={`${openIndexes.includes(index) ? "" : "rotate-180"} transition-transform duration-200`}
              />
            </button>
          </div>

          {openIndexes.includes(index) && (
            <div className="flex flex-col gap-3 mt-3 ml-9 text-sm">
              <div className="flex items-center">
                <span className="text-[#737373] w-[60px]">Price</span>
                <span className="text-[#323130]">{item.price}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] w-[60px]">Size</span>
                <span className="text-[#323130]">{item.size}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] w-[60px]">QTY</span>
                <span className="text-[#323130]">{item.qty}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] w-[60px]">Date</span>
                <span className="text-[#323130]">{item.date}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] w-[60px]">Status</span>
                <span className="bg-[#B2FFB4] text-[#04910C] text-[12px] px-2 py-1.5 rounded-[10px]">
                  Available
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] w-[60px]">Action</span>
                <div className="flex gap-4">
                  <Image src={"/images/eye-open.png"} alt="eye" width={24} height={24} />
                  <Image src={"/images/edit-03.png"} alt="edit" width={24} height={24} />
                  <Image src={"/images/delete-1.png"} alt="delete" width={24} height={24} />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
