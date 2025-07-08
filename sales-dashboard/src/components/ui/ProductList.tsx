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
    price: 32032,
    sales: 3000,
    image: "/images/Produk.png",
    status: "Success",
  },
    {
    id: "021231",
    name: "Kanky Kitadakate (Green)",
    price: 32032,
    sales: 3000,
    image: "/images/Produk.png",
    status: "Pending",
  },
    {
    id: "021231",
    name: "Kanky Kitadakate (Green)",
    price: 32032,
    sales: 3000,
    image: "/images/Produk.png",
    status: "Failed",
  },
];

export default function ProductList() {
  return (
    <div className="bg-white border border-[#E7E7E7] rounded-[24px] p-4 w-full">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h3 className="text-[16px] text-[#454545] font-semibold leading-[130%]">Product Popular</h3>
        <div className="flex items-center gap-1 text-[12px] font-semibold text-[#3D3D3D] cursor-pointer leading-[140%]">
          Show All
          <Image src="/images/arrow-up-right.png" alt="arrow" width={24} height={24} />
        </div>
      </div>

      {/* Table header */}
      <div className="border-[#F6F6F6] border-[1px] rounded-2xl">
    <div className="bg-[#F6F6F6] px-4 py-[14.5px] rounded-t-2xl  flex justify-between text-[12px] text-[#2A2A2A] font-bold">
        <span>Product</span>
        <Image src={"/images/_sorter.svg"} alt="sorter" width={11} height={22}/>
      </div>

      {/* Items */}
      {products.map((product, idx) => (
        <ProductItem key={idx} product={product} />
      ))}
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
    <div className="border-b-[#F6F6F6] border-b-1 last:border-none px-3 py-4">
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
          <div className="text-[14px] text-[#454545]">
            <p className="text-xs text-[#454545]">{product.id}</p>
            <p>{product.name}</p>
          </div>
        </div>
        <Image
            src={"/images/icon_arrow.png"}
            alt="arrow"
            width={32}
            height={28}
            className={!expanded ? "rotate-180" : ""}
        />
      </div>

      {expanded && (
        <div className="mt-3 space-y-2 text-sm text-[#444]">
          <div className="flex gap-5 items-center">
            <span className="text[#737373] text-xs font-normal">Price:</span>
            <div className="text-[#323130] font-bold">
                {product.price !== undefined ? `$${product.price.toLocaleString()}` : "N/A"}
            </div>
            
          </div>
          <div className="flex gap-5 items-center">
            <span className="text[#737373] text-xs font-normal">Sales:</span>
            <div className="text-[#323130] font-bold">
                {product.sales ?? "N/A"}
            </div>
            
          </div>
          <div className="flex gap-5 items-center">
            <span className="text[#737373] text-xs font-normal">Status:</span>
            <span className={`text-xs p-1.5 rounded-xl ${statusColor}`}>
              {product.status ?? "Unknown"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
