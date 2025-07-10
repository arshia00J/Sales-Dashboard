import RoutingBar from "../components/RoutingBar";
import ProductInfo from "./components/ProductInfo";

export default function Home() {
  return (

      <div className="flex flex-col flex-1 h-full">


        {/* Main */}
        <div className="flex flex-col flex-1 overflow-y-auto">


          <div className="p-5 bg-gray-100 gap-[22px] min-h-full lg:flex-row lg:items-start">
            <RoutingBar/>
            <ProductInfo/>
           
          </div>
        </div>
      </div>

  );
}
