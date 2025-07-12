"use client";
import ProductForm from "./ProductForm";
import ImageUploader from "./ImageUploader";
import { useState } from "react";
import { useProductStore } from "@/app/product/productStore";

export default function ProductInfo() {
  const [formData, setFormData] = useState({
    sku: "",
    productName: "",
    size: "",
    color: "",
    category: "",
    price: "",
    quantity: "",
    status: "",
  });

  const addProduct = useProductStore((state) => state.addProduct);

  const handleAdd = () => {
    if (!formData.productName) return alert("Product name is required!");

    addProduct({
      sku: formData.sku,
      name: formData.productName,
      price: `$${formData.price}`,
      size: Number(formData.size),
      qty: Number(formData.quantity),
      date: new Date().toLocaleString(),
      status: formData.status === "available" ? "Available" : "Out of Stock",
      img: "/simages/Produk.png",
    });

    setFormData({
      sku: "",
      productName: "",
      size: "",
      color: "",
      category: "",
      price: "",
      quantity: "",
      status: "",
    });
  };

  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-start">
      <div className="w-full xl:w-2/3">
        <ProductForm formData={formData} setFormData={setFormData} />
      </div>
      <div className="w-full xl:w-1/3">
        <ImageUploader />
        <div className="flex justify-end">
          <button
            onClick={handleAdd}
            className="px-6 mt-4 py-3 bg-[#1A71F6] border-none rounded-[12px] w-[142px] text-[14px] font-bold text-white cursor-pointer"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}