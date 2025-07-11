"use client";
import SmartImage from "@/app/StartImage";
import { useState } from "react";
import { useProductStore } from "@/app/product/productStore";


export default function ProductTable() {

  const products = useProductStore((state) => state.products);
  const removeProduct = useProductStore((state) => state.removeProduct);

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const deleteHandler = (id: string, index: number) => {
    removeProduct(id);
    setOpenIndexes((prev) => prev.filter((i) => i !== index));
  };


  return (
    <div className="bg-white dark:bg-[#1A1A1B] border border-[#E7E7E7] dark:border-[#3D3D3D] rounded-xl overflow-hidden">
      {/* Table layout for xl+ screens */}
      <div className="hidden xl:block">
        <table className="w-full text-sm">
          <thead className="bg-[#F6F6F6] dark:bg-[#101011] text-[#737373] dark:text-[#F6F6F6] text-[12px] font-bold">
            <tr>
              <th className="text-left px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="text-left px-2">Product</th>
              <th className="text-left px-2">Price</th>
              <th className="text-left px-2">Size</th>
              <th className="text-left px-2">QTY</th>
              <th className="text-left px-2">Date</th>
              <th className="text-left px-2">Status</th>
              <th className="text-left px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="border-t border-[#E7E7E7] dark:border-[#3D3D3D]">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="flex items-center gap-2 px-2 py-2">
                  <SmartImage src={item.img} alt={item.name} width={40} height={40} />
                  <div>
                    <p className="text-[#1A71F6] text-[12px]">{item.sku}</p>
                    <p className="text-[#454545] dark:text-[#F6F6F6] text-sm">{item.name}</p>
                  </div>
                </td>
                <td className="px-2 dark:text-[#F6F6F6]">{item.price}</td>
                <td className="px-2 dark:text-[#F6F6F6]">{item.size}</td>
                <td className="px-2 dark:text-[#F6F6F6]">{item.qty}</td>
                <td className="px-2 dark:text-[#F6F6F6]">{item.date}</td>
                <td className="px-2 dark:text-[#F6F6F6]">
                  <span
                    className={`text-[12px] px-2 py-1 rounded-[10px] ${
                      item.status === "Available"
                        ? "bg-[#B2FFB4] text-[#04910C]"
                        : "bg-[#FFD3D3] text-[#FF2D2D]"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-2">
                  <div className="flex gap-2">
                    <SmartImage src="/images/eye-open.png" alt="eye" width={20} height={20} className="dark:invert" />
                    <SmartImage src="/images/edit-03.png" alt="edit" width={20} height={20} className="dark:invert"/>
                    <SmartImage onClick={() => deleteHandler(item.sku, index)} className="cursor-pointer dark:invert" src="/images/delete-1.png" alt="delete" width={20} height={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Accordion layout for mobile */}
    <div className="bg-white dark:bg-[#1A1A1B] rounded-xl overflow-hidden block xl:hidden">
      <div className="bg-[#F6F6F6] dark:bg-[#101011] dark:text-[#F6F6F6] px-4 py-[14.5px] text-[12px] font-bold border-b border-[#E7E7E7] dark:border-[#3D3D3D]">
        Product
      </div>

      {products.map((item, index) => (
        <div key={index} className="border-b last:border-none border-[#E7E7E7] dark:border-[#3D3D3D] px-3 py-4 ">
          <div className="flex gap-3 cursor-pointer" onClick={() => toggleItem(index)}>
            <input type="checkbox" className="w-[16.8px] h-[16.8px] border-[#454545] m-[3.6px] cursor-pointer" />
            <SmartImage src={item.img} alt={item.name} width={42} height={42} />
            <div className="flex-1 gap-1 flex flex-col">
              <p className="text-[#1A71F6] text-[12px] font-normal">{item.sku}</p>
              <p className="text-sm text-[#454545] dark:text-[#F6F6F6] font-normal">{item.name}</p>
            </div>
            <button>
              <SmartImage
                src={"/images/icon_arrow.png"}
                alt="arrow"
                width={32}
                height={28}
                className={`${openIndexes.includes(index) ? "" : "rotate-180"} transition-transform duration-200 dark:invert`}
              />
            </button>
          </div>

          {openIndexes.includes(index) && (
            <div className="flex flex-col gap-3 mt-3 ml-9 text-sm">
              <div className="flex items-center">
                <span className="text-[#737373] dark:text-[#B0B0B0] w-[60px]">Price</span>
                <span className="text-[#323130] dark:text-[#F6F6F6]">{item.price}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] dark:text-[#B0B0B0] w-[60px]">Size</span>
                <span className="text-[#323130] dark:text-[#F6F6F6]">{item.size}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] dark:text-[#B0B0B0] w-[60px]">QTY</span>
                <span className="text-[#323130] dark:text-[#F6F6F6]">{item.qty}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] dark:text-[#B0B0B0] w-[60px]">Date</span>
                <span className="text-[#323130] dark:text-[#F6F6F6]">{item.date}</span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] dark:text-[#B0B0B0] w-[60px]">Status</span>
                <span className="bg-[#B2FFB4] text-[#04910C] text-[12px] px-2 py-1.5 rounded-[10px]">
                  Available
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-[#737373] dark:text-[#B0B0B0] w-[60px]">Action</span>
                <div className="flex gap-4">
                  <SmartImage src={"/images/eye-open.png"} alt="eye" width={24} height={24} className="dark:invert" />
                  <SmartImage src={"/images/edit-03.png"} alt="edit" width={24} height={24} className="dark:invert"/>
                  <SmartImage onClick={() => deleteHandler(item.sku, index)} src={"/images/delete-1.png"} alt="delete" width={24} height={24} className="cursor-pointer dark:invert" />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    </div>
  );
}
