"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price?: number;
  sales?: number;
  image?: string;
  status?: "Success" | "Pending" | "Failed";
};

const products: Product[] = [
  {
    id: "021231",
    name: "Kanky Kitadakate (Green)",
    price: 20,
    sales: 3000,
    image: "/simages/Produk.png",
    status: "Pending",
  },
  {
    id: "021231",
    name: "Kanky Kitadakate (Green)",
    price: 20,
    sales: 2311,
    image: "/simages/Produk.png",
    status: "Success",
  },
  {
    id: "021231",
    name: "Kanky Kitadakate (Green)",
    price: 20,
    sales: 2111,
    image: "/simages/Produk.png",
    status: "Failed",
  },
  {
    id: "021231",
    name: "Kanky Kitadakate (Green)",
    price: 20,
    sales: 1661,
    image: "/simages/Produk.png",
    status: "Success",
  },
];

export default function ProductList() {
  return (
    <div className="bg-white dark:bg-[#1A1A1B] border border-[#E7E7E7] dark:border-[#3D3D3D] rounded-[24px] p-4 w-full">
      <div className="flex justify-between mb-6">
        <h3 className="text-[16px] text-[#454545] dark:text-[#F6F6F6] font-semibold leading-[130%]">Product Popular</h3>
        <div className="flex items-center gap-1 text-[12px] font-semibold text-[#3D3D3D] dark:text-[#F6F6F6] cursor-pointer">
          Show All
          <Image src={"/simages/arrow-up-right.png"} alt="arrow" width={16} height={16} className="dark:invert" />
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="rounded-[16px] overflow-hidden border border-[#E7E7E7] dark:border-[#252525]">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-[#F6F6F6] dark:bg-[#101011] text-[#2A2A2A] dark:text-[#D5D5D5] text-[12px] font-bold h-[46px]">
                <th className="text-left px-4 py-3 w-[40%]">Product</th>
                <th className="text-left px-4 py-3 w-[20%]">Price</th>
                <th className="text-left px-4 py-3 w-[20%]">Sales</th>
                <th className="text-left px-4 py-3 w-[20%]">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={idx} className="border-t border-[#F6F6F6] dark:border-[#3D3D3D] h-[65px]">
                  <td className="flex items-center gap-2 p-3">
                    <Image
                      src={product.image ?? "/simages/Produk.png"}
                      alt={product.name}
                      width={41}
                      height={41}
                    />
                    <div>
                      <p className="text-[12px] text-[#454545] dark:text-[#3090FF] font-normal">{product.id}</p>
                      <p className="text-[14px] text-[#454545] dark:text-[#F6F6F6] font-semibold">{product.name}</p>
                    </div>
                  </td>
                  <td className="px-3 text-[#323130] dark:text-[#F6F6F6] text-[14px] font-semibold">
                    ${product.price?.toFixed(2)}
                  </td>
                  <td className="px-3 font-semibold text-[#323130] dark:text-[#F6F6F6] text-[14px]">
                    {product.sales?.toLocaleString()}
                  </td>
                  <td className="px-3">
                    <span
                      className={`text-xs px-2 py-1.5 rounded-xl font-medium ${
                        product.status === "Success"
                          ? "bg-[#B2FFB4] text-[#04910C]"
                          : product.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : product.status === "Failed"
                          ? "bg-red-100 text-red-600"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="block xl:hidden">
        <div className="w-full h-[46px] pl-4 pt-[14.5px] bg-[#F6F6F6] dark:bg-[#101011] rounded-t-[16px]">
          <p className="text-[#F6F6F6] font-bold text-[12px]">Product</p>
        </div>
          <div className="border-[#F6F6F6] dark:border-[#3D3D3D] border-[1px] rounded-b-2xl">
            {products.map((product, idx) => (
              <ProductItem key={idx} product={product} />
            ))}
          </div>

        



      </div>
    </div>
  );
}

function ProductItem({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);

  const statusColor =
    product.status === "Success"
      ? "bg-[#F3FFC8] text-[#28B652]"
      : product.status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : product.status === "Failed"
      ? "bg-red-100 text-red-600"
      : "bg-gray-200 text-gray-800";

  return (
    <div className="border-b-[#F6F6F6] dark:border-b-[#3D3D3D] border-b-1 last:border-none px-3 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name || "Product Image"}
              width={40}
              height={40}
              className="rounded"
      
            />
          )}
          <div className="text-[14px] text-[#454545] dark:text-[#F6F6F6]">
            <p className="text-xs text-[#454545] dark:text-[#1A71F6]">{product.id}</p>
            <p>{product.name}</p>
          </div>
        </div>
        <Image
          src={"/simages/icon_arrow.png"}
          alt="arrow"
          width={32}
          height={28}
          className={!expanded ? "rotate-180 dark:invert" : "dark:invert"}
        />
      </div>

      {expanded && (
        <div className="mt-3 space-y-2 text-sm text-[#444]">
          <div className="flex gap-5 items-center">
            <span className="text-[#737373] dark:text-[#B0B0B0] text-xs font-normal">Price</span>
            <div className="text-[#323130] dark:text-[#F6F6F6] font-bold">
              {product.price !== undefined
                ? `$${product.price.toLocaleString()}`
                : "N/A"}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <span className="text-[#737373] dark:text-[#B0B0B0] text-xs font-normal">Sales</span>
            <div className="text-[#323130] dark:text-[#F6F6F6] font-bold">
              {product.sales ?? "N/A"}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <span className="text-[#737373] text-xs font-normal">Status</span>
            <span className={`text-xs p-1.5 rounded-xl ${statusColor}`}>
              {product.status ?? "Unknown"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
