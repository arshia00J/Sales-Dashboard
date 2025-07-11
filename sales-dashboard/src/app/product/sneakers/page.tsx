import RoutingBar from "./components/RoutingBar";
import ProductList from "./components/ProductList";

export default function Sneakers() {
  return (

      <div className="flex flex-col flex-1 h-full">


        {/* Main */}
        <div className="flex flex-col flex-1 overflow-y-auto">


          <div className="p-5 gap-[22px]">
            <RoutingBar/>
            <ProductList/>

           
          </div>
        </div>
      </div>

  );
}
