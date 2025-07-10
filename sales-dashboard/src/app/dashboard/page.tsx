import SalesTarget from "@/app/dashboard/components/SalesTarget";
import ThisYearSales from "@/app/dashboard/components/ThisYearSales";
import Stats from "@/app/dashboard/components/Stats";
import SalesPromo from "@/app/dashboard/components/SalesPromo";
import CustomerGrowth from "@/app/dashboard/components/CustomerGrowth";
import ProductList from "@/app/dashboard/components/ProductList";
import RoutingBar from "./components/RoutingBar";

export default function Home() {
  return (

      <div className="flex flex-col flex-1 h-full">
        {/* Main */}
        <div className="flex flex-col flex-1 overflow-y-auto">


          <div className="p-5 bg-gray-100 grid grid-cols-12 gap-[22px] min-h-full">
            {/* Title */}
           <RoutingBar/>

            {/* Sales Target + Chart */}
            <div className="col-span-12 xl:col-span-6 flex flex-col gap-[22px]">
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

  );
}
