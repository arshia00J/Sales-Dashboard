"use client";
import { useState } from "react";

export default function ProductForm() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

<div className="flex bg-white flex-col p-4 border border-[#E7E7E7] rounded-[24px] w-full">

    <h3 className="text-[#454545] text-[22px] font-semibold mb-2">
        Product Information
    </h3>
    <p className="text-[#B0B0B0] text-[14px] font-normal mb-4">
        Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in velit mattis.
    </p>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="font-bold text-[14px] text-[#323130]">SKU</label>
        <input
          type="text"
          name="sku"
          placeholder="Input no SKU"
          value={formData.sku}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1.5 font-bold text-[14px] text-[#323130]">Product Name</label>
        <input
          type="text"
          name="productName"
          placeholder="Input product name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1.5 font-bold text-[14px] text-[#323130]">Size</label>
          <input
            type="text"
            name="size"
            placeholder="Input Price"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1.5 font-bold text-[14px] text-[#323130]">Color</label>
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130]">Product Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 text-[#737373] py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
        >
          <option value="">Select product category</option>
          <option value="sneakers">Sneakers</option>
          <option value="jackets">Jackets</option>
          <option value="tshirts">T-Shirts</option>
        </select>
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130]">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Input Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
        />
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130]">Quantity</label>
        <input
          type="number"
          name="quantity"
          placeholder="Input stock"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
        />
      </div>

      <div>
        <label className="block mb-1.5 font-bold text-[14px] text-[#323130]">Status Product</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full text-[#737373] px-4 py-[15.5px] border-[1.6px] border-[#D1D1D1] rounded-[12px]"
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
