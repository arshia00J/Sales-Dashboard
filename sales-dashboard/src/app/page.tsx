import Header from "@/components/layout/Header";
import SalesTarget from "@/components/ui/SalesTarget";
import ThisYearSales from "@/components/ui/ThisYearSales";
import Stats from "@/components/ui/Stats";
import SalesPromo from "@/components/ui/SalesPromo";
import CustomerGrowth from "@/components/ui/CustomerGrowth";
import ProductList from "@/components/ui/ProductList";

export default function Home() {
  return (

    <div className="min-h-screen bg-gray-50">

      <Header></Header>
      <div className="p-[20px] bg-gray-100 flex flex-col gap-5">
        <SalesTarget></SalesTarget>
        <ThisYearSales></ThisYearSales>
        <Stats></Stats>
        <SalesPromo></SalesPromo>
        <CustomerGrowth></CustomerGrowth>
        <ProductList></ProductList>
      </div>
      


    </div>
    


  );
}
