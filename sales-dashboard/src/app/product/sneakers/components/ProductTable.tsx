"use client";
import Image from "next/image";
import { useState } from "react";

const sampleProducts = [
  {
    id: "021231",
    name: "Story Honzo (Black)",
    price: "$32.00",
    size: 40,
    qty: 234,
    date: "04/17/23 at 8:25 PM",
    status: "Available",
    img: "/images/Produk.png",
  },
  {
    id: "021232",
    name: "Story Honzo (Cream)",
    price: "$32.00",
    size: 40,
    qty: 234,
    date: "04/17/23 at 8:25 PM",
    status: "Out of Stock",
    img: "/images/Produk.png",
  },
  {
    id: "021233",
    name: "Story Honzo (Green)",
    price: "$32.00",
    size: 40,
    qty: 234,
    date: "04/17/23 at 8:25 PM",
    status: "Available",
    img: "/images/Produk.png",
  },
];


export default function ProductTable() {

    const [products, setProducts] = useState(sampleProducts);

    const deleteHandler = (id: string) => {
        const index = products.findIndex((item) => item.id === id);
        const updated = products.filter((item) => item.id !== id);

        setOpenIndexes((prev) => prev.filter((i) => i !== index));

        setProducts(updated);
    };


  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white border border-[#E7E7E7] rounded-xl overflow-hidden">
      {/* Table layout for xl+ screens */}
      <div className="hidden xl:block">
        <table className="w-full text-sm">
          <thead className="bg-[#F6F6F6] text-[#737373] text-[12px] font-bold">
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
              <tr key={index} className="border-t border-[#E7E7E7]">
                <td className="px-4 py-2">
                  <input type="checkbox" />
                </td>
                <td className="flex items-center gap-2 px-2 py-2">
                  <Image src={item.img} alt={item.name} width={40} height={40} />
                  <div>
                    <p className="text-[#1A71F6] text-[12px]">{item.id}</p>
                    <p className="text-[#454545] text-sm">{item.name}</p>
                  </div>
                </td>
                <td className="px-2">{item.price}</td>
                <td className="px-2">{item.size}</td>
                <td className="px-2">{item.qty}</td>
                <td className="px-2">{item.date}</td>
                <td className="px-2">
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
                    <Image src="/images/eye-open.png" alt="eye" width={20} height={20} />
                    <Image src="/images/edit-03.png" alt="edit" width={20} height={20} />
                    <Image onClick={() => deleteHandler(item.id)} className="cursor-pointer" src="/images/delete-1.png" alt="delete" width={20} height={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Accordion layout for mobile */}
    <div className="bg-white rounded-xl overflow-hidden border block xl:hidden border-[#E7E7E7]">
      <div className="bg-[#F6F6F6] px-4 py-[14.5px] text-[12px] font-bold border-b border-[#E7E7E7]">
        Product
      </div>

      {products.map((item, index) => (
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
                  <Image onClick={() => deleteHandler(item.id)} src={"/images/delete-1.png"} alt="delete" width={24} height={24} className="cursor-pointer" />
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
