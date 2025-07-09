import Header from "@/app/dashboard/components/Header";
import SalesTarget from "@/app/dashboard/components/SalesTarget";
import ThisYearSales from "@/app/dashboard/components/ThisYearSales";
import Stats from "@/app/dashboard/components/Stats";
import SalesPromo from "@/app/dashboard/components/SalesPromo";
import CustomerGrowth from "@/app/dashboard/components/CustomerGrowth";
import ProductList from "@/app/dashboard/components/ProductList";
import SlideBar from "@/app/dashboard/components/SideBar";
import Navbar from "@/app/dashboard/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex flex-row overflow-hidden">
      {/* Sidebar */}
      <div className="hidden xl:flex">
        <SlideBar />
      </div>

      {/* Right Content */}
      <div className="flex flex-col flex-1 h-full">
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="flex flex-col flex-1 overflow-y-auto">

          <Header />

          <div className="p-5 bg-gray-100 grid grid-cols-12 gap-[22px] min-h-full">
            {/* Title */}
            <div className="flex flex-col mb-[20px] col-span-12">
              <h1 className="font-semibold leading-[130%] text-2xl text-[#2A2A2A]">Dashboard</h1>
              <p className="font-normal leading-[150%] text-[14px] text-[#888888]">Dashboard</p>
            </div>

            {/* Sales Target + Chart */}
            <div className="col-span-12 xl:col-span-6 flex flex-col justify-between">
              <SalesTarget />
              <ThisYearSales />
            </div>

            {/* Stats + Promo */}
            <div className="col-span-12 xl:col-span-6 flex flex-col gap-[22px]">
              <Stats />
              <SalesPromo />
            </div>

            {/* Customer Growth */}
            <div className="col-span-12 xl:col-span-5">
              <CustomerGrowth />
            </div>

            {/* Product List */}
            <div className="col-span-12 xl:col-span-7">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
