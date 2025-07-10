import Image from "next/image";
import Link from "next/link";

export default function RoutingBar() {
  return (


    <div className="flex flex-col mb-[20px] col-span-12">
      <h1 className="font-semibold leading-[130%] text-2xl text-[#2A2A2A] mb-2">
        Product
      </h1>
      <div className="font-normal leading-[150%] text-[14px] text-[#888888] flex items-center gap-1">
        <Link href={"/dashboard"}>
        <p>
            Dashboard
        </p>
        
        </Link>
            <Image
            src={"/images/arrow-right.png"}
            alt="arrow"
            width={16}
            height={16}
            />

            <p>
                Product
            </p>

        <Image
            src={"/images/arrow-right.png"}
            alt="arrow"
            width={16}
            height={16}
            />

            <p className="text-[#1A71F6] text-[14px] font-bold">
                Sneakers
            </p>
      </div>
      
    </div>
  );
}
