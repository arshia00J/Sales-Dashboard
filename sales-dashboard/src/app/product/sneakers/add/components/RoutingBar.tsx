import Image from "next/image";
import Link from "next/link";

export default function RoutingBar() {
  return (


    <div className="flex flex-col mb-[20px] col-span-12">
      <h1 className="font-semibold leading-[130%] text-2xl text-[#2A2A2A] dark:text-[#F6F6F6] mb-2">
        Product
      </h1>
      <div className="font-normal leading-[150%] text-[14px] text-[#888888] dark:text-[#B0B0B0] flex items-center gap-1">
        <Link href={"/dashboard"}>
        <p>
            Dashboard
        </p>
        
        </Link>
        <Image
            src={"arrow-right.png"}
            alt="arrow"
            width={16}
            height={16}
            />

            <p>
                Product
            </p>

        <Image
            src={"arrow-right.png"}
            alt="arrow"
            width={16}
            height={16}
            />
          <Link href={"/product/sneakers"}>
            <p>
                Sneakers
            </p>       
          </Link>


          <Image
            src={"arrow-right.png"}
            alt="arrow"
            width={16}
            height={16}
            />
          <Link href={"/product/sneakers/add"}>
            <p className="text-[#1A71F6] text-[14px] font-bold">
                Add Product
            </p>       
          </Link>

          

      </div>
      
    </div>
  );
}
