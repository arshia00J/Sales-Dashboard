import Header from "@/app/dashboard/components/Header";
import SlideBar from "@/app/dashboard/components/SideBar";
import Navbar from "@/app/dashboard/components/Navbar";
import RoutingBar from "./components/RoutingBar";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex flex-row overflow-hidden">
      {/* Sidebar */}
      <div className="hidden xl:flex xl:overflow-y-auto">
        <SlideBar />
      </div>

      {/* Right Content */}
      <div className="flex flex-col flex-1 h-full">
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="flex flex-col flex-1 overflow-y-auto">

          <Header />

          <div className="p-5 bg-gray-100 gap-[22px] min-h-full">
            <RoutingBar/>
            <ProductList/>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}
