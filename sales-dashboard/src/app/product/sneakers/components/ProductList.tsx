import Image from "next/image";
import ProductTable from "./ProductTable";
import PaginationBar from "./PaginationBar";

export default function ProductList() {
  return (
<div className="w-full bg-white border border-[#E7E7E7] rounded-2xl p-4 flex flex-col gap-6">

<div className="hidden xl:flex justify-between">
      <div className="relative w-[500px]">
        <input
          type="text"
          placeholder="Search for id, name product"
          className="w-full pl-4 pr-11 py-[9.5px] border border-[#B0B0B0] rounded-[12px] text-sm text-[#949494] focus:outline-none focus:ring-2 focus:ring-blue-300 "
        />
        <Image
          src="/images/search.png"
          alt="search"
          width={24}
          height={24}
          className="absolute right-[6px] top-2"
        />
      </div>


    <div className="flex gap-3 items-center">
        <button className="flex items-center gap-1.5 border border-[#B0B0B0] rounded-xl p-2 text-[12px] font-bold text-[#454545]">
            Filter
            <Image
                src={"/images/filter-list.png"}
                alt="filter"
                width={24}
                height={24}
            />
        </button>

        <button className="flex items-center gap-1.5 border border-[#B0B0B0] rounded-xl p-2 text-[12px] font-bold text-[#454545]">
            Export
            <Image
                src={"/images/download-2.png"}
                alt="filter"
                width={24}
                height={24}
            />
        </button>

        <button className="flex items-center gap-1.5 bg-[#1A71F6] text-white rounded-xl p-2 text-[12px] font-bold ml-auto">
            New Product
            <Image
                src={"/images/add.png"}
                alt="filter"
                width={24}
                height={24}
            />
        </button>
    </div>

</div>



      <div className="bg-white border border-[#D1D1D1] w-full h-[58px] rounded-[14px] flex items-center justify-between text-center px-3 py-2">
        
        <div className="rounded-xl bg-[#D9EDFF] px-[10.25px] py-1 text-[12px] font-bold w-full text-[#1A71F6]">
          <p>Sneakers (50)</p>
        </div>

        <div className="text-[#737373] px-[10.25px] py-1 text-[12px] w-full font-bold">
          Jacket (122)
        </div>

        <div className="text-[#737373] px-[10.25px] py-1 text-[12px] w-full font-bold">
          T-Shirt (121)
        </div>

        <div className="text-[#737373] px-[10.25px] py-1 text-[12px] w-full font-bold">
          Bag (52)
        </div>
      </div>

    <div className="flex gap-3 items-center xl:hidden">
        <button className="flex items-center gap-1.5 border border-[#B0B0B0] rounded-xl p-2 text-[12px] font-bold text-[#454545]">
            Filter
            <Image
                src={"/images/filter-list.png"}
                alt="filter"
                width={24}
                height={24}
            />
        </button>

        <button className="flex items-center gap-1.5 border border-[#B0B0B0] rounded-xl p-2 text-[12px] font-bold text-[#454545]">
            Export
            <Image
                src={"/images/download-2.png"}
                alt="filter"
                width={24}
                height={24}
            />
        </button>

        <button className="flex items-center gap-1.5 bg-[#1A71F6] text-white rounded-xl p-2 text-[12px] font-bold ml-auto">
            New Product
            <Image
                src={"/images/add.png"}
                alt="filter"
                width={24}
                height={24}
            />
        </button>
    </div>

<ProductTable/>

<PaginationBar/>



    </div>
  );
}
