"use client";
import React from "react";

type Props = {
  formData: {
    sku: string;
    productName: string;
    size: string;
    color: string;
    category: string;
    price: string;
    quantity: string;
    status: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<Props["formData"]>>;
};

export default function ProductForm({ formData, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
<div className="flex bg-white dark:bg-[#1A1A1B] flex-col p-4 border border-[#E7E7E7] dark:border-[#3D3D3D] rounded-[24px] w-full">

    <h3 className="text-[#454545] dark:text-[#F6F6F6] text-[22px] font-semibold mb-2">
        Product Information
    </h3>
    <p className="text-[#B0B0B0] text-[14px] font-normal mb-4">
        Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.
    </p>

    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">SKU</label>
        <input
          type="text"
          name="sku"
          placeholder="Input no SKU"
          value={formData.sku}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1.5 font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">Product Name</label>
        <input
          type="text"
          name="productName"
          placeholder="Input product name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1.5 font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">Size</label>
          <input
            type="text"
            name="size"
            placeholder="Input Price"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1.5 font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">Color</label>
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">Product Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 text-[#737373] py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
        >
          <option value="">Select product category</option>
          <option value="sneakers">Sneakers</option>
          <option value="jackets">Jackets</option>
          <option value="tshirts">T-Shirts</option>
        </select>
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Input Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
        />
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">Quantity</label>
        <input
          type="number"
          name="quantity"
          placeholder="Input stock"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
        />
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130] dark:text-[#F6F6F6]">Status Product</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full text-[#737373] px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] dark:text-[#737373] rounded-[12px]"
        >
          <option value="">Select status product</option>
          <option value="available">Available</option>
          <option value="outofstock">Out of Stock</option>
        </select>
      </div>

    </form>

    </div>
  );
}
